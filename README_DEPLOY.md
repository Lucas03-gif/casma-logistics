# Casma Logistics — Fullstack (Ready for GitHub & Render)

This package includes your React frontend and an Express backend that sends contact form emails via Gmail (Nodemailer).

## Quick steps to push to GitHub
1. Unzip this package and open a terminal in the folder.
2. Initialize git and push to a new repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Casma Logistics fullstack"
   git branch -M main
   git remote add origin https://github.com/<your-username>/casma-logistics.git
   git push -u origin main
   ```

## Deploy to Render (one-click from render.yaml)
1. Sign in to https://render.com and connect your GitHub.
2. On Render, choose **New → Blueprint** and select your GitHub repo (or upload this folder).
3. Render will use `render.yaml` to create the web service.
4. In Render dashboard, set the environment variable `EMAIL_PASS` (enter your Google App Password).
   - `EMAIL_USER` is already set to `casmalogistics03@gmail.com` in the render.yaml.
5. Deploy — Render will build and start your app. Visit the provided URL.

## Local testing
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the frontend:
   ```bash
   npm run build
   ```
3. Create `.env` from `.env.example` and add your app password.
4. Start the server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000 and test the contact form.

## Notes
- Do not commit `.env` to public repos. Keep `EMAIL_PASS` secret.
- To use your domain (casma-logistics.co.tz), add a custom domain in Render and follow their DNS instructions.
