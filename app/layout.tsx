import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import GlowEffect from "@/components/glow";
import { ToastContainer } from "react-toastify";

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
      <body className="relative flex bg-background flex-col">
        {/* <div className="flex-grow">
        </div> */}
        <GlowEffect />
        <ToastContainer />
        <div className="grid grid-cols-12">
          <div>
            <Header />
          </div>
          <div className="col-span-10">
            {children}
          </div>
          <div></div>
        </div>
      </body>
    </html>
  );
}
