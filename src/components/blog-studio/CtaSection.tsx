import { siteConfig } from "@/config/site";
import React from "react";

const CtaSection: React.FC = () => {
  return (
    <section
      id="get-started"
      className="py-20 bg-gradient-to-br from-yellow-600 to-yellow-700 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Creation?
          </h2>

          {/* <p className="text-lg text-yellow-100 mb-10 leading-relaxed">
            Join thousands of creators who have streamlined their workflow and
            elevated their content with Publish Studio. Start your journey
            today.
          </p> */}

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href={siteConfig.links.blogStudio}
              className="px-8 py-3 rounded-full bg-white text-yellow-700 font-medium text-lg hover:bg-yellow-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Free Trial
            </a>
            {/* <a
              href="#demo"
              className="px-8 py-3 rounded-full border border-white text-white font-medium text-lg hover:bg-yellow-700 transition-all duration-300"
            >
              Request a Demo
            </a> */}
          </div>

          <p className="mt-6 text-sm text-yellow-200">
            No credit card required. 7-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
