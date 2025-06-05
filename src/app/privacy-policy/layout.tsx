import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "At Publish Studio, we value your privacy and are committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data while you use our platform.",
};

export default function SocialStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-gray-900 font-sans">{children}</div>;
}
