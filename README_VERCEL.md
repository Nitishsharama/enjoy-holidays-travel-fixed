# Enjoy Holidays Tour and Travel

## Deploy to Vercel (static frontend)

1. Push the contents of this folder to the **root** of a GitHub repository. `index.html`, `assets/`, `css/`, `data/`, and `js/` must be at the repository root.
2. In Vercel, import that GitHub repository.
3. In Project Settings → Build & Development Settings:
   - Framework Preset: **Other**
   - Build Command: **Leave empty**
   - Output Directory: **Leave empty** (or `.` if Vercel requires a value)
   - Install Command: **Leave empty**
4. Deploy.

This is a static HTML/React-CDN website; it does not need `npm run build`.

## Important functionality note

The local `server.py` backend is not deployed by this static Vercel setup. The website can render, but `/api/enquiries` will not save enquiries to a central database. Current browser `localStorage` data is local to each visitor's device/browser. To collect enquiries centrally, connect a database/API (for example, Supabase, Firebase, or a Vercel Function) and update the form submission code.

The admin credentials are currently hard-coded in frontend JavaScript and are not secure for a public website. Do not use the admin panel for sensitive customer data until authentication and server-side storage are implemented.
