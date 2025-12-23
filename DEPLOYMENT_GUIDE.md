# Portfolio Deployment Guide - Vercel

## 🚀 Deploy Your Portfolio to Vercel

Follow these steps to get your portfolio live on the internet!

---

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Make it **Public**
4. **DO NOT** initialize with README (your project already has files)
5. Click "Create repository"

---

## Step 2: Push Your Code to GitHub

Open a **new terminal** in VS Code and run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio deployment"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

---

## Step 3: Deploy to Vercel

### Option A: Using Vercel Website (Easiest)

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Import Project"
5. Find and select your `portfolio` repository
6. Vercel will auto-detect the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
7. Click "Deploy"
8. Wait 2-3 minutes for deployment to complete
9. You'll get a live URL like: `https://portfolio-username.vercel.app`

### Option B: Using Vercel CLI (Advanced)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

---

## Step 4: Configure Custom Domain (Optional)

1. Go to your Vercel dashboard
2. Select your portfolio project
3. Go to "Settings" → "Domains"
4. Add your custom domain (if you have one)
5. Follow DNS configuration instructions

---

## 🎯 Your Portfolio Will Be Live At:

- **Vercel URL:** `https://portfolio-[your-username].vercel.app`
- **Custom Domain:** (if configured)

---

## ✅ Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections work (Hero, Skills, Projects, Contact)
- [ ] GitHub links open correctly
- [ ] Resume downloads properly
- [ ] Golden Snitch animation works
- [ ] Music player appears (add music file if needed)
- [ ] Mobile responsive

---

## 🔄 Future Updates

Every time you push changes to GitHub, Vercel will **automatically redeploy** your site!

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push

# Vercel automatically deploys the changes!
```

---

## 🆘 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Music Not Playing
- Upload `ambient-music.mp3` to the `public` folder
- Commit and push the file to GitHub

### Images Not Loading
- Ensure all images are in the `public` folder
- Use absolute paths like `/image.png`

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Congratulations! Your portfolio is now live! 🎉**
