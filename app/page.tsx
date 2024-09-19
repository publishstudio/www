import { Images } from "@/assets/images";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { siteConfig } from "@/config/site";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    images: [Images.og],
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: [Images.og],
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitter.creator,
    site: siteConfig.twitter.site,
  },
  appLinks: {
    web: {
      url: siteConfig.url,
    },
  },
  category: "Software",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.theme.color,
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <iframe
        title="Interactive Story"
        src="https://story.screenspace.io/rakesh-potnuru/e_65496589"
        width="100%"
        height="100%"
        allow="clipboard-write"
        style={{ border: "none", background: "#efeff7" }}
        className="relative z-10 -mt-20 min-h-[400px] sm:min-h-[800px]"
      ></iframe>
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
