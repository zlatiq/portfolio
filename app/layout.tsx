import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zlatica Štrkolcová | Grafická dizajnérka",
  description:
    "Moderné portfólio grafickej dizajnérky Zlatice Štrkolcovej: web/UI, typografia, print, kampane a vizuálna identita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
