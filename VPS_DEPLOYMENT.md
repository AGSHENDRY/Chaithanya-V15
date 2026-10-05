CHAITHANYA V5 — GITHUB + VPS + MONGODB ATLAS

Architecture
------------
GitHub -> VPS (Node.js/Express + PM2 + Nginx) -> MongoDB Atlas
Chaithanya and Travyn can run on the same VPS using different ports/domains.

1) Upload this project to GitHub
--------------------------------
Create a PRIVATE GitHub repository and upload the contents of this folder.
Do NOT upload .env or MongoDB credentials.

2) Prepare Ubuntu VPS
---------------------
Recommended: Ubuntu 22.04/24.04, 4 GB RAM, 2 CPU cores.

Install:
  sudo apt update && sudo apt upgrade -y
  sudo apt install -y nginx git
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  sudo npm install -g pm2

3) Clone and install
--------------------
  sudo mkdir -p /var/www
  cd /var/www
  sudo git clone YOUR_PRIVATE_REPO_URL chaithanya
  sudo chown -R $USER:$USER /var/www/chaithanya
  cd /var/www/chaithanya
  npm install --omit=dev

4) Create the real .env
-----------------------
  nano .env

Copy the values from .env.example and set:
  NODE_ENV=production
  PORT=3000
  HOST=127.0.0.1
  MONGODB_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
  MONGODB_DB=chaithanya

Never commit .env to GitHub.

5) Test locally on VPS
----------------------
  npm start

In another SSH session:
  curl http://127.0.0.1:3000/api/health

Expected when MongoDB is configured:
  {"ok":true,"database":"chaithanya",...}

6) Run permanently with PM2
---------------------------
  pm2 start server.js --name chaithanya
  pm2 save
  pm2 startup

Run the command printed by 'pm2 startup', then:
  pm2 save

7) Nginx for chaithanya.shop
----------------------------
Create:
  sudo nano /etc/nginx/sites-available/chaithanya.shop

Use:
  server {
      listen 80;
      server_name chaithanya.shop www.chaithanya.shop;

      location / {
          proxy_pass http://127.0.0.1:3000;
          proxy_http_version 1.1;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          client_max_body_size 6m;
          proxy_read_timeout 60s;
      }
  }

Enable:
  sudo ln -s /etc/nginx/sites-available/chaithanya.shop /etc/nginx/sites-enabled/chaithanya.shop
  sudo nginx -t
  sudo systemctl reload nginx

8) HTTPS
---------
After DNS points chaithanya.shop to the VPS:
  sudo apt install -y certbot python3-certbot-nginx
  sudo certbot --nginx -d chaithanya.shop -d www.chaithanya.shop

9) MongoDB Atlas
----------------
In Atlas Network Access, allow the VPS public IPv4 address with /32.
Example:
  123.123.123.123/32

Use a dedicated database user. Never expose MongoDB port 27017 on the VPS.

10) Updating from GitHub
------------------------
  cd /var/www/chaithanya
  git pull
  npm install --omit=dev
  pm2 restart chaithanya

IMPORTANT
---------
- Product/store data is stored in MongoDB collection: chaithanyaLiveStore.
- Product/home images uploaded by the site are stored in MongoDB GridFS bucket: chaithanyaImages.
- localStorage is only a browser cache; MongoDB is the shared source of truth.
- The frontend polls MongoDB-backed /api/store every 15 seconds, so changes can appear across browsers.
- The existing project has client-side admin controls. This update does NOT claim to make the admin panel a secure server-side authentication system. Before opening admin access to the public internet, add proper server-side authentication/authorization.
