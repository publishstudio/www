import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-28 relative overflow-hidden h-screen items-center flex">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-white -z-10" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-orange-600 to-red-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
          Your Creative Workflow, Reinvented.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Create, organize, and publish with Publish Studio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#products"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-red-400 text-white font-medium text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 z-10"
          >
            Start Creating
          </Link>
          {/* <a
            href="#learn-more"
            className="px-8 py-3 rounded-full border border-red-200 text-red-600 font-medium text-lg hover:bg-red-50 transition-all duration-300"
          >
            Learn More
          </a> */}
        </div>

        {/* Abstract UI mockup */}
        {/* <div className="mt-16 relative">
          <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="h-12 bg-gray-50 border-b flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="h-[260px] bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">
                  Publish Studio Interface Preview
                </p>
              </div>
            </div>
          </div> */}

        {/* Decorative elements */}
        {/* <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-600 rounded-full opacity-20"></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-600 rounded-full opacity-20"></div>
        </div> */}
      </div>
      {/* Wave SVG for visual interest */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,142.93,94.67,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
