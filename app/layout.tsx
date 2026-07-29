import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WordBucket — Read without breaking your flow",
  description:
    "Define words from any Android app, save them to your bucket, and remember them with calm spaced repetition.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
