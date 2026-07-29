# WordBucket website

The public landing page for WordBucket, built with Next.js and designed to
match the mobile app's paper-and-ink visual language.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production checks

```bash
npm run typecheck
npm run build
```

## Enable the APK download

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_APK_URL` to the direct
download URL for the latest GitHub Release APK. The site intentionally shows
"APK coming soon" while that variable is unset.
