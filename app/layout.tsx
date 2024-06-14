import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";

export const metadata: Metadata = {
  title: "Portfolio | Hadyan Abdul Aziz",
  description: "Created with Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="flex bg-background flex-row px-12">
        <div className="grid w-full grid-cols-10">
          <div className="col-span-9">
            {children}
          </div>
          <Header />
        </div>
      </body>
    </html>
  );
}
