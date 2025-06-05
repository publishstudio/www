import Image from "next/image";
import React from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatarUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  company,
  avatarUrl,
}) => (
  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
    <svg
      className="h-8 w-8 text-red-300 mb-4"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>

    <p className="text-gray-600 mb-6 italic">{quote}</p>

    <div className="flex items-center">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={name}
          width={10}
          height={10}
          className="w-10 h-10 rounded-full mr-4 object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-orange-400 mr-4 flex items-center justify-center text-white font-medium">
          {name.charAt(0)}
        </div>
      )}

      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">
          {role}
          {company && `, ${company}`}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Publish Studio has completely transformed our content workflow. We're able to create and distribute content twice as fast with half the team.",
      name: "Sarah Johnson",
      role: "Content Director",
      company: "Elevate Media",
    },
    {
      quote:
        "The seamless integration between Blog Studio and Social Studio makes repurposing content effortless. It's a game-changer for social media managers.",
      name: "Michael Chen",
      role: "Social Media Strategist",
      company: "Spark Digital",
    },
    {
      quote:
        "As a solo creator, I needed something that wouldn't overwhelm me with complexity. Publish Studio hits that sweet spot of power and simplicity.",
      name: "Emma Rodriguez",
      role: "Independent Content Creator",
    },
    {
      quote:
        "Our marketing team has seen a 40% increase in productivity since adopting Publish Studio. The ROI is undeniable.",
      name: "David Wilson",
      role: "Marketing Director",
      company: "TechFlow",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <span className="text-xs font-medium text-primary">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Loved by Content Creators Everywhere
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our users have to say about their experience with Publish
            Studio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
