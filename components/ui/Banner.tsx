import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Banner() {
  return (
    <div className="sticky top-0 z-[9999] bg-black p-1 text-center text-sm text-white">
      Support Publish Studio on{" "}
      <Link
        href={siteConfig.links.productHunt}
        target="_blank"
        className="text-primary"
      >
        Product Hunt
      </Link>
    </div>
  );
}
