import type { Metadata } from "next";
import "./globals.css";
// import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";


const primaryFont = localFont({
  src: "./fonts/HudsonNY-Serif-edited.woff",
  display: "swap",
  weight: '800',
  variable: "--primary-font",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selquet.vercel.app"),
  title: "MUSTANG - BAR & GRILL",
  description:
    "Mustang el ambiente es único, los detalles de construcción incluyen un container renovado y reciclado, una amplia galería circundante, un espacioso estacionamiento, equipamiento comercial de última generación y productos de primerísima calidad.",
  keywords: [
    "restaurante",
    "pizza",
    "comida",
    "capital",
    "café",
    "pizzeria",
    "parrilla",
    "desayuno",
    "cena",
  ],
  alternates: {
    canonical: "/",
  },
  creator: "Julian Sanz",
  publisher: "Julian Sanz",
  authors: {
    name: "Julian",
    url: "https://www.linkedin.com/in/julian-sanz-ba4270240/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} antialiased`}>{children}</body>
      {/* <body className={` antialiased`}>{children}</body> */}
    </html>
  );
}
