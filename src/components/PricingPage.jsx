import React from 'react';
import { useSpring, animated } from 'react-spring';

const PricingPage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const tiers = [
    {
      name: "Free",
      price: "$0",
      features: ["Limited Templates", "Basic AI Assistance", "Up to 3 Resumes"],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$9.99",
      features: [
        "All Templates",
        "Advanced AI Assistance",
        "Unlimited Resumes",
        "Priority Support",
      ],
      buttonText: "Upgrade to Pro",
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Custom Templates",
        "Dedicated AI Model",
        "Team Collaboration",
        "24/7 Support",
      ],
      buttonText: "Contact Us",
    },
  ];

  return (
    <animated.section style={props} className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Pricing</h2>
        <p className="text-lg mb-8 text-center text-gray-400">
          Choose the plan that's right for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="p-6 bg-glass-bg backdrop-blur-lg rounded-lg border border-glass-border text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-4xl font-bold mb-4">{tier.price}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-primary-purple hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default PricingPage;
