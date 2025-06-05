import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Publish Studio is committed to providing a transparent and user-friendly experience. Our Terms of Service outline the rules and guidelines for using our platform, ensuring a safe and enjoyable environment for all users.",
};

export default function SocialStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-gray-900 font-sans">{children}</div>;
}
