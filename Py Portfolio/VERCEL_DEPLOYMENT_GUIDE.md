# Vercel Deployment Guide

## Project Structure
```
Py Portfolio/
├── api/
│   └── index.py          # Flask application
├── static/
│   ├── index.html        # Portfolio page
│   ├── style.css         # Styling
│   └── script.js         # JavaScript
├── requirements.txt      # Python dependencies
├── vercel.json          # Vercel configuration
└── .gitignore
```

## Deployment Steps

### 1. Prerequisites
- GitHub account (to push your code)
- Vercel account (https://vercel.com)

### 2. Prepare Your Repository

#### Option A: Create a new GitHub repository
```bash
cd "s:\Py Portfolio"
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Option B: Push to existing repository
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### 3. Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select your repository
4. **Framework Preset**: Select "Python"
5. **Build Command**: Leave empty (optional: `pip install -r requirements.txt`)
6. **Output Directory**: Leave empty
7. Click "Deploy"

### 4. Custom Domain (Optional)
1. In Vercel Dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Follow DNS instructions

## Environment Variables
If you need to add environment variables:
1. Project Settings → Environment Variables
2. Add your variables (e.g., API keys, database URLs)

## Live URL Format
Your portfolio will be live at:
```
https://your-project-name.vercel.app
```

## Troubleshooting

### Static files not loading
- Ensure `static/` folder contains `index.html`, `style.css`, and `script.js`
- Check `vercel.json` routes configuration

### 500 Error
- Check vercel.json syntax (valid JSON)
- Verify Flask routes in `api/index.py`

### Template not found
- Ensure `index.html` is in the `static/` folder
- Check Flask `template_folder` setting

## Next Steps
- Edit `index.html` to personalize your portfolio
- Update your name, skills, and projects
- Add links to your GitHub, LinkedIn, etc.
- Deploy again with `git push`

## Customization Tips
1. **Change name**: Edit `<span>Your Name</span>` in index.html
2. **Add projects**: Add `<article class="card">` elements in the projects section
3. **Update CSS**: Modify `style.css` for custom colors/styling
4. **Add functionality**: Extend Flask routes in `api/index.py`
