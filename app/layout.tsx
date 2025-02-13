"use client";

import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Banner } from "@/components/ui/Banner";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={`flex h-screen flex-col items-center justify-center gap-8 bg-[#FCFCFC] dark:bg-black ${inter.className}`}
      >
        <Providers>
          {siteConfig.showBanner && <Banner />}
          {/* <Header />
          {children}
          <Footer />
          <ScrollToTop /> */}
          <h1 className="text-center text-7xl font-bold">
            A new Publish Studio experience is coming soon.
          </h1>
          <a
            href="https://app.publishstudio.one/login"
            className="text-blue-500 underline"
          >
            Old user? Login.
          </a>
        </Providers>
      </body>
    </html>
  );
}
