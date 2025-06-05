import { Images } from "@/assets/images";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Studio by Publish Studio",
  description:
    "Blog Studio is a powerful content creation platform by Publish Studio, designed to streamline your blogging workflow and enhance your writing experience.",
  openGraph: {
    images: [Images.ssPreview],
    title: "Blog Studio by Publish Studio",
    description:
      "Blog Studio is a powerful content creation platform by Publish Studio, designed to streamline your blogging workflow and enhance your writing experience.",
    url: `${siteConfig.url}/blog-studio`,
    siteName: siteConfig.title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: [Images.ssPreview],
    title: "Blog Studio by Publish Studio",
    description:
      "Blog Studio is a powerful content creation platform by Publish Studio, designed to streamline your blogging workflow and enhance your writing experience.",
    creator: siteConfig.twitter.creator,
    site: siteConfig.twitter.site,
  },
};

export default function BlogStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-gray-900 font-sans">{children}</div>;
}
