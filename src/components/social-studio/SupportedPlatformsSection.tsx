import { Images } from "@/assets/images";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";

interface PlatformProps {
  name: string;
  logo: string;
}

const Platform: React.FC<PlatformProps> = ({ name, logo }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div
      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 bg-indigo-50`}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={24}
        height={24}
        className="rounded-sm"
      />
    </div>
    <span className="text-sm font-medium text-gray-700 whitespace-pre-wrap text-center">
      {name}
    </span>
  </div>
);

const SupportedPlatformsSection: React.FC = () => {
  const platforms = [
    {
      name: "LinkedIn",
      logo: Images.linkedinLogo,
    },
    {
      name: "Threads",
      logo: Images.threadsLogo,
    },
    {
      name: "Bluesky\n(Coming Soon)",
      logo: Images.bskyLogo,
    },
    {
      name: "Facebook\n(Coming Soon)",
      logo: Images.fbLogo,
    },
    {
      name: "Instagram\n(Coming Soon)",
      logo: Images.instagramLogo,
    },
    {
      name: "X\n(Coming Soon)",
      logo: Images.xLogo,
    },
  ];

  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <span className="text-xs font-medium text-blue-600">
              Integrations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Post Everywhere You Need to Be
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with all your favorite platforms and reach your audience
            wherever they are.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {platforms.map((platform, index) => (
                <Platform
                  key={index}
                  name={platform.name}
                  logo={platform.logo}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              More platforms added regularly.
              <a
                href={siteConfig.links.feedback}
                target="_blank"
                className="text-blue-600 font-medium ml-1 hover:text-blue-500 transition-colors"
              >
                Request an integration
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatformsSection;
