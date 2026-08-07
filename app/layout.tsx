import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const themeInitScript = `
try {
  var theme = localStorage.getItem("wordbucket-site-theme");
  var themes = ["classic", "forest", "sepia", "plum", "midnight", "mono", "rose", "matcha"];
  if (themes.includes(theme)) document.documentElement.dataset.previewTheme = theme;
} catch (_) {}
`;

export const metadata: Metadata = {
  title: "WordBucket — Read without breaking your flow",
  description:
    "Define words from any Android app, save them to your bucket, and remember them with calm spaced repetition.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
