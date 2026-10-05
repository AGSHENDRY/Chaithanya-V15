# GitHub Secrets Setup

Production environment values are supplied from GitHub Actions Secrets.

Go to:
GitHub -> Repository -> Settings -> Secrets and variables -> Actions -> New repository secret

## MongoDB

Add this secret:

- MONGODB_URI = your complete MongoDB Atlas connection string
- MONGODB_DB = chaithanya
- MONGO_MAX_POOL_SIZE = 10

Example format (do NOT use this exact value):
mongodb+srv://USERNAME:PASSWORD@CLUSTER.mongodb.net/

Replace USERNAME, PASSWORD and CLUSTER with your own Atlas values.

## VPS

Add:
- VPS_HOST = VPS public IPv4 address
- VPS_USER = VPS SSH user
- VPS_SSH_KEY = your private SSH key

## Website

Add:
- CORS_ORIGIN = https://chaithanya.shop
- SITE_URL = https://chaithanya.shop

## Optional email

- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- MAIL_FROM

IMPORTANT:
- Never commit .env to GitHub.
- Never put the MongoDB URI/password in normal source files.
- Never share your private SSH key.
- The workflow creates .env on the VPS during deployment.
