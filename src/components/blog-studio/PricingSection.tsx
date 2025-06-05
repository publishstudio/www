import { siteConfig } from "@/config/site";
import {
  initializePaddle,
  Paddle,
  PricePreviewResponse,
} from "@paddle/paddle-js";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";

const PricingSection: React.FC = () => {
  const [prices, setPrices] = useState<PricePreviewResponse>();

  useEffect(() => {
    if (
      !process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ||
      !process.env.NEXT_PUBLIC_PADDLE_PRO_PRICE_ID
    )
      return;

    initializePaddle({
      environment:
        process.env.NODE_ENV === "production" ? "production" : "sandbox",
      token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
    })
      .then(async (paddleInstance: Paddle | undefined) => {
        if (paddleInstance) {
          let ipAddress = "";
          const fetchIpAddress = async () => {
            try {
              const response = await fetch("https://api.ipify.org?format=json");
              const data = await response.json();

              ipAddress = data.ip;
            } catch {
              // Ignore
            }
          };

          await fetchIpAddress();

          paddleInstance
            .PricePreview({
              items: [
                {
                  priceId: process.env.NEXT_PUBLIC_PADDLE_PRO_PRICE_ID!,
                  quantity: 1,
                },
              ],
              customerIpAddress: ipAddress,
            })
            .then((prices) => {
              setPrices(prices);
            })
            .catch(() => {
              // Ignore
            });
        }
      })
      .catch(() => {
        // Ignore
      });
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-yellow-50 rounded-full mb-4">
            <span className="text-xs font-medium text-yellow-600">
              Simple Pricing
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            One Price for Everything
          </h2>

          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include both
            Blog Studio and Social Studio.
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl overflow-hidden border border-yellow-100 shadow-lg p-1">
            <div className="bg-white rounded-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pro Plan
                  </h3>
                  <p className="text-gray-600">
                    Everything you need for professional content creation
                  </p>
                </div>

                <div className="mt-4 md:mt-0 text-center md:text-right">
                  <span className="text-4xl font-bold text-gray-900">
                    {prices?.data.details.lineItems[0].formattedTotals
                      .subtotal ?? siteConfig.defaultPrice}
                  </span>
                  <span className="text-gray-600 ml-1">/month</span>
                  {/* <p className="text-sm text-gray-500">
                    Billed annually or $29/month
                  </p> */}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <ul className="space-y-3">
                    {[
                      "7-day free trial",
                      "Unlimited projects",
                      "Publish to all 6 platforms",
                      "Unlimited file uploads",
                      "Unlimited AI generations",
                      "Unlimited inserts from media libraries",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <ul className="space-y-3">
                    {[
                      "Unlimited access to content planner",
                      "Unlimited idea generations",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={siteConfig.links.blogStudio}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-yellow-600 to-amber-400 text-white font-medium text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Start Your 7-Day Free Trial
                </a>
                <p className="mt-4 text-sm text-gray-500">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need a custom solution for your team or enterprise?
              <a
                href="#contact"
                className="text-yellow-600 font-medium ml-1 hover:text-yellow-500 transition-colors"
              >
                Contact us
              </a>{" "}
              for custom pricing.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
