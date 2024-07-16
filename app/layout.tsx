'use client'
// import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
// import GlowEffect from "@/components/glow";
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import 'react-tooltip/dist/react-tooltip.css';

// export const metadata: Metadata = {
//   title: "Portfolio | Hadyan Abdul Aziz",
//   description: "Created with Next js",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Portfolio | Hadyan Abdul Aziz</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body className="relative flex bg-background flex-col">
            {/* <div className="flex-grow">
            </div> */}
            {/* <GlowEffect /> */}
            <ToastContainer />
            <Header />
            <div className="grid grid-cols-12">
              <div></div>
              <div className="col-span-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pathname}
                    initial="initial"
                    animate="animate"
                    // exit="exit"
                    variants={{
                      initial: { opacity: 0, x: -200, y: 0},
                      animate: { opacity: 1, x: 0, y: 0},
                      // exit: { opacity: 0, x: 200, y: 0},
                    }}
                    transition={{ duration: 0.5 }}
                  >
                      {children}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div></div>
            </div>
      </body>
    </html>
  );
}
