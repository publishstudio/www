import { Calendar, Image, Import, Pen, Sparkles, Zap } from "lucide-react";
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-yellow-600" />,
      title: "AI Writing Assistant",
      description:
        "Get intelligent suggestions and content ideas powered by advanced AI.",
    },
    {
      icon: <Pen className="h-6 w-6 text-yellow-600" />,
      title: "WYSIWYG Editor",
      description:
        "Intuitive editing experience with real-time preview of your content.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-yellow-600" />,
      title: "Content Planner",
      description:
        "Schedule and organize your content calendar for optimal engagement.",
    },
    {
      icon: <Image className="h-6 w-6 text-yellow-600" />,
      title: "Media Integration",
      description:
        "Seamlessly incorporate images, videos, and other media into your content.",
    },
    {
      icon: <Import className="h-6 w-6 text-yellow-600" />,
      title: "Import Content",
      description:
        "Import content from anywhere and organize it all in one central location.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "One-Click Publishing",
      description:
        "Instantly publish to multiple platforms with a single action.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-yellow-50 rounded-full mb-4">
            <span className="text-xs font-medium text-yellow-600">
              Powerful Features
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Everything You Need to Create Exceptional Content
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of features empowers you to create, manage,
            and publish content effortlessly across all your platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
