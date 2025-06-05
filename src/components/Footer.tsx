import { Images } from "@/assets/images";
import { siteConfig } from "@/config/site";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4">
              <Image
                src={Images.logo}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-bold">Publish Studio</span>
            </a>
            <p className="text-gray-600 mb-4">
              The platform for modern content creators to craft, manage, and
              publish exceptional content.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.x}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                { name: "Blog Studio", href: "/blog-studio" },
                { name: "Social Studio", href: "/social-studio" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: "Support", href: siteConfig.links.support },
                { name: "Feedback", href: siteConfig.links.feedback },
                { name: "Documentation", href: siteConfig.links.docs },
                { name: "Status", href: siteConfig.links.status },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Publish Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
