import { Images } from "@/assets/images";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Studio by Publish Studio",
  description:
    "Social Studio is a powerful platform by Publish Studio, designed to enhance your social media management and content creation experience.",
  openGraph: {
    images: [Images.bsPreview],
    title: "Social Studio by Publish Studio",
    description:
      "Social Studio is a powerful platform by Publish Studio, designed to enhance your social media management and content creation experience.",
    url: `${siteConfig.url}/blog-studio`,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: [Images.bsPreview],
    title: "Social Studio by Publish Studio",
    description:
      "Social Studio is a powerful platform by Publish Studio, designed to enhance your social media management and content creation experience.",
    creator: siteConfig.twitter.creator,
    site: siteConfig.twitter.site,
  },
};

export default function SocialStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-gray-900 font-sans">{children}</div>;
}
