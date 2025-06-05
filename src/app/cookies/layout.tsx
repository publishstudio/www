import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "At Publish Studio, we use cookies to enhance your experience on our platform. Our Cookie Policy explains what cookies are, how we use them, and your choices regarding cookie management. We are committed to transparency and user control over their data.",
};

export default function SocialStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-gray-900 font-sans">{children}</div>;
}
