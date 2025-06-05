import { Images } from "@/assets/images";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Powerful Tools for Modern Creators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our suite of products is designed to elevate your content creation
            workflow and help you deliver your best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Blog Studio */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                <Image
                  src={Images.blogStudioLogo}
                  alt="Blog Studio Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Blog Studio
              </h3>
              <p className="text-gray-600 mb-6">
                Effortless long-form content creation and publishing to Medium,
                WordPress, Dev.to, and more. Write once, publish everywhere.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Multi-Platform Publishing",
                  "Rich Text Editor",
                  "Content Planner",
                  "AI Assistance",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="block h-2 w-2 rounded-full bg-yellow-600"></span>
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center flex-row gap-4">
                <a
                  href={siteConfig.links.blogStudio}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-600 to-amber-400 text-white text-sm font-medium hover:shadow-lg transition-all"
                >
                  Start Writing
                </a>
                <a
                  href="/blog-studio"
                  className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-500 transition-colors"
                >
                  Learn more
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-4 flex items-center justify-center border-t border-gray-100">
              <Image
                src={Images.bsPreview}
                alt="Blog Studio Preview"
                width={200}
                height={100}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>

          {/* Social Studio */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Image
                  src={Images.socialStudioLogo}
                  alt="Social Studio Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Social Studio (Launching Soon)
              </h3>
              <p className="text-gray-600 mb-6">
                Plan, create, and schedule social media posts with ease.
                Streamline your social presence and engage with your audience
                effectively.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Multi-Platform Publishing",
                  "Workspaces",
                  "Post Previews",
                  "AI Assistance (Coming Soon)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="block h-2 w-2 rounded-full bg-blue-600"></span>
                    </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center flex-row gap-4">
                <a
                  href={siteConfig.links.socialStudio}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-400 text-white text-sm font-medium hover:shadow-lg transition-all"
                >
                  Launching Soon
                </a>
                <a
                  href="/social-studio"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Learn more
                  <svg
                    className="ml-1 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-4 flex items-center justify-center border-t border-gray-100">
              <Image
                src={Images.ssPreview}
                alt="Social Studio Preview"
                width={200}
                height={100}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
