# Rawan Mohamed Farouk — Portfolio

A modern, editorial-style portfolio built with Next.js.

## 🚀 Deploy to Vercel (3 steps)

### Option A: Deploy via Vercel CLI
```bash
# 1. Install dependencies
npm install

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy
vercel
```
Follow the prompts — it auto-detects Next.js. Your site will be live at `https://rawan-portfolio.vercel.app`.

### Option B: Deploy via GitHub (Recommended)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done! Vercel auto-detects Next.js settings.

## 🛠 Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure
```
rawan-portfolio/
├── pages/
│   ├── _app.js          # App wrapper + global CSS import
│   └── index.jsx        # Main portfolio page (all sections)
├── public/
│   └── photos/          # All your photos
├── styles/
│   └── globals.css      # Global styles, animations, fonts
├── next.config.js       # Static export config
├── tailwind.config.js
└── package.json
```

## ✏️ Customization
- **Update links**: Edit LinkedIn/GitHub URLs in `pages/index.jsx`
- **Add projects**: Add entries to the `projects` array in the `Projects` component
- **Change colors**: Edit CSS variables in `styles/globals.css`
