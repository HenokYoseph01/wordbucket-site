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

## APK download

The site defaults to WordBucket's permanent latest-release APK URL. To override
it locally, copy `.env.example` to `.env.local` and change
`NEXT_PUBLIC_APK_URL` to another direct APK URL.
