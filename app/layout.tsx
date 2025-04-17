import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sly Fox - Curated Instance Intelligence",
  description: "Get all of your key insights in one place. Sly Fox is a curated instance intelligence platform that helps you make sense of your data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
