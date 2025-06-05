import { Sparkles } from "lucide-react";
import React from "react";

const OverviewSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-red-50 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-primary mr-2" />
            <span className="text-xs font-medium text-primary">
              The Future of Content Creation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Empowering creators to produce exceptional content that resonates
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            From long-form blog posts to social media updates, we&apos;ve
            streamlined the process so you can focus on what matters
            most—creating meaningful content that connects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Create
              </h3>
              <p className="text-gray-600">
                Draft, edit, and polish your content with powerful tools
                designed for creators.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Organize
              </h3>
              <p className="text-gray-600">
                Schedule and manage all your content from one central dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-6 mx-auto">
                <span className="text-indigo-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Publish
              </h3>
              <p className="text-gray-600">
                Send your content to multiple platforms with a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
