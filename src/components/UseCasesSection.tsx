import { BriefcaseIcon, MessageSquare, TrendingUp, Users } from "lucide-react";
import React from "react";

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bulletPoints: string[];
}

const UseCase: React.FC<UseCaseProps> = ({
  icon,
  title,
  description,
  bulletPoints,
}) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
    <div className="p-8">
      <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="h-5 w-5 text-primary mr-2">•</span>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Content Creators & Bloggers",
      description:
        "Streamline your content creation workflow from ideation to publication.",
      bulletPoints: [
        "Write, edit, and publish blog posts efficiently",
        "Maintain consistent posting schedules",
        "Distribute content across multiple platforms",
        // "Track engagement and optimize future content",
      ],
    },
    {
      icon: <BriefcaseIcon className="h-6 w-6 text-primary" />,
      title: "Marketing Teams",
      description:
        "Coordinate your content strategy across channels and team members.",
      bulletPoints: [
        "Centralize content planning and production",
        "Ensure brand consistency across all platforms",
        // "Collaborate seamlessly with team members",
        // "Measure campaign performance with detailed analytics",
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Social Media Managers",
      description:
        "Manage multiple accounts and campaigns with ease and precision.",
      bulletPoints: [
        "Schedule posts for optimal engagement times",
        "Maintain consistent visual identity",
        // "Monitor performance across platforms",
        // "Engage with audience through integrated tools",
      ],
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Freelancers",
      description:
        "Handle multiple clients and projects efficiently from one dashboard.",
      bulletPoints: [
        "Organize client content separately but manage from one place",
        // "Streamline approval workflows",
        "Deliver consistent results across projects",
        // "Scale your business without additional tools",
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-50 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">
              Who Benefits
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Tailored for Every Content Creator
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how different professionals leverage Publish Studio to enhance
            their workflow and deliver exceptional content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCase
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              bulletPoints={useCase.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
