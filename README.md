# Marutendra Pratap Singh Portfolio

A professional single-page developer portfolio built with React, JavaScript, Tailwind CSS, Framer Motion, and Lucide React icons.

## Edit Your Content

Most future updates happen inside `src/data`:

- `profile.js`: name, intro, social links, contact info, resume path
- `projects.js`: project cards and expanded project details
- `learning.js`: learning timeline and accordion topics
- `skills.js`: skill groups
- `stats.js`: growth statistics
- `currentlyLearning.js`: currently learning cards

## Install And Run

```bash
cd portfolio
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Build For Production

```bash
npm run build
```

The production build is created in `dist`.

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Use these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy.

## Resume File

Place your resume PDF at `public/resume.pdf`. The download buttons already point there.
