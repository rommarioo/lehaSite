import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Личная страница Алексея Науменкова",
  description: "Личная страница Алексея Науменкова",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    <head>
      {/*<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>*/}
      {/*<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>*/}
      {/*<link rel="shortcut icon" href="/favicon.ico"/>*/}
      {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>*/}
      {/*<link rel="manifest" href="/site.webmanifest"/>*/}
    </head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url(/back3.jpg)] bg-no-repeat bg-cover bg-center h-[100vh]`}
    >
    {children}
    </body>
    </html>
  );
}
