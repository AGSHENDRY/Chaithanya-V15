const nodemailer = require('nodemailer');
function cleanEmails(emails) { return [...new Set((emails || []).map(e => String(e || '').trim().toLowerCase()).filter(e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)))]; }
exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const emails = cleanEmails(body.emails);
    const subject = String(body.subject || 'CHAITHANYA Notification').trim();
    const message = String(body.message || '').trim();
    if (!emails.length) return { statusCode: 400, body: JSON.stringify({ success: false, error: 'No valid registered user emails found.' }) };
    if (!message) return { statusCode: 400, body: JSON.stringify({ success: false, error: 'Message is empty.' }) };
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return { statusCode: 500, body: JSON.stringify({ success: false, error: 'SMTP is not configured' }) };
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT || 587), secure: String(SMTP_PORT) === '465', auth: { user: SMTP_USER, pass: SMTP_PASS } });
    const from = process.env.MAIL_FROM || SMTP_USER;
    await transporter.sendMail({ from: `CHAITHANYA <${from}>`, to: from, bcc: emails, subject, text: message });
    return { statusCode: 200, body: JSON.stringify({ success: true, sent: emails.length }) };
  } catch (e) { console.error(e); return { statusCode: 500, body: JSON.stringify({ success: false, error: e.message }) }; }
};
