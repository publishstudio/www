import { Images } from "@/assets/images";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/FAQ";
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
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-between gap-10 px-10 py-8 text-center md:flex-row md:px-40 md:py-12 lg:py-20">
          <h3 className="text-2xl font-bold">Want to try before signing up?</h3>
          <a
            href="https://story.screenspace.io/rakesh-potnuru/e_65496589"
            target="_blank"
            className="rounded-sm bg-slate-700 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Try Interactive Demo
          </a>
        </div>
      </div>
      {/* <iframe
        title="Interactive Story"
        src="https://story.screenspace.io/rakesh-potnuru/e_65496589"
        width="100%"
        height="100%"
        allow="clipboard-write"
        style={{ border: "none", background: "#efeff7" }}
        className="relative z-10 -mt-20 min-h-[400px] sm:min-h-[800px]"
      ></iframe> */}
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      {/* <Contact /> */}
      <Faq />
    </>
  );
}
