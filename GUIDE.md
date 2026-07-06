# 11+ Trainer — Setup Guide

A practice app for the Trafford Consortium 11+ (AGSB) exam.
6 full papers · 390 unique questions · real exam timings · works on iPad, iPhone and Android — no App Store needed.

---

## What's in this folder

| File | What it is |
|---|---|
| index.html | The app itself |
| app.js | App logic (timer, scoring, progress) |
| data-eng.js / data-vr.js / data-nvr.js / data-maths.js | The 6 papers of questions |
| manifest.json, sw.js, icon-192.png, icon-512.png | Makes it installable + work offline |

Keep all files together in one folder. Nothing needs to be edited.

---

## Step 1 — Put the app online (free, ~5 minutes)

### Option A: Netlify (recommended — easiest)

1. Go to **https://app.netlify.com/signup** on your computer and create a free account (you can sign up with email or Google).
2. Once logged in, go to **https://app.netlify.com/drop**
3. **Drag the whole `elevenplus` folder** from your computer onto the page.
4. Wait ~20 seconds. Netlify gives you a link like `https://random-name-123.netlify.app`
5. (Optional) Click **Site settings → Change site name** to make it something memorable, e.g. `https://our-11plus.netlify.app`

That's it — the app is live. It's an unlisted link: only people you give it to will find it.

### Option B: GitHub Pages (also free)

1. Create a free account at **https://github.com**
2. Click **+ → New repository**, name it `elevenplus`, tick **Public**, click **Create**.
3. Click **uploading an existing file**, drag all the files in (not the folder — the files themselves), click **Commit changes**.
4. Go to **Settings → Pages**, under "Branch" choose **main** and **/ (root)**, click **Save**.
5. After a minute your app is at `https://YOUR-USERNAME.github.io/elevenplus/`

---

## Step 2 — Install it on your son's iPad

1. Open **Safari** on the iPad (must be Safari, not Chrome) and go to your link.
2. Tap the **Share button** (the square with an arrow pointing up).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add**.

An **11+ Trainer** icon now appears on the home screen like a real app — full screen, no browser bars, and it **works offline** after the first load.

### On your iPhone
Exactly the same steps: Safari → Share → Add to Home Screen.

### On an Android phone
1. Open **Chrome** and go to the link.
2. Tap the **⋮ menu** (top right).
3. Tap **"Add to Home screen"** (or "Install app").
4. Tap **Add / Install**.

---

## Good to know

- **Progress is saved on each device.** Scores, history and the "Fix my mistakes" list are stored on the iPad itself. If he practises on the iPad and you look on your iPhone, you'll see separate histories.
- **Timer toggle** is on the home screen and paper-picker screens. On = each section is timed exactly like the real exam (English 10 min, VR 12 min, NVR 9 min, Maths 19 min) and finishes automatically when time runs out. Off = untimed practice.
- **Don't delete the Netlify site / GitHub repo** — the icon on the iPad loads from there (though once loaded it keeps working offline).
- **To update the app later:** drag the folder onto Netlify Drop again (Deploys → drag & drop), then on the iPad close and reopen the app twice.

## Suggested way to use it

1. Start with the timer **off**, one section at a time, using "Practise one section".
2. Read every explanation on the results screen — right or wrong.
3. Clear the "Fix my mistakes" list between papers.
4. Move to full mocks with the timer **on** as the exam approaches — the September exam rewards pace as much as accuracy.
5. Track the chart in "My progress" against the 85% target line.
