import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Fonte usada no nosso projeto é a Nunito
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "modoke",
  description: "Apredendo sobre acessibilidade web de forma simples e divertida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
