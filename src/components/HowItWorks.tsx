/* eslint-disable  */
import React from 'react';
import { MessageCircleQuestion, Leaf, Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Ask About Any Sustainability Claim",
    description: "Simply type your question about any company's environmental claims or sustainability initiatives.",
    icon: <MessageCircleQuestion className="w-6 h-6 text-white" />
  },
  {
    number: "02",
    title: "Get Evidence-Based Analysis",
    description: "Grnwize provides comprehensive information backed by research and regulatory standards.",
    icon: <Leaf className="w-6 h-6 text-white" />
  },
  {
    number: "03",
    title: "Understand the Reality",
    description: "Learn the difference between genuine sustainability efforts and potential greenwashing practices.",
    icon: <Check className="w-6 h-6 text-white" />
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-greenwise-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-greenwise-dark-blue mb-4">How Grnwize Works</h2>
          <p className="text-gray-600">
            Our AI chatbot makes it simple to understand complex sustainability issues in just a few steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="absolute -top-5 left-6">
                  <div className="w-10 h-10 rounded-full bg-greenwise-dark-blue flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="pt-6">
                  <span className="text-green-600 font-bold">{step.number}</span>
                  <h3 className="text-xl font-semibold text-greenwise-dark-blue my-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-greenwise-light-blue rounded-lg p-4 flex-1">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-greenwise-dark-blue flex-shrink-0 flex items-center justify-center">
                  <MessageCircleQuestion className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-greenwise-text">Is Company X's claim about being carbon neutral by 2030 realistic?</p>
              </div>
            </div>
            
            <div className="w-8 flex justify-center md:rotate-90">
              <div className="w-6 h-0.5 bg-gray-300"></div>
            </div>
            
            <div className="bg-greenwise-light-blue rounded-lg p-4 flex-1">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-greenwise-dark-blue flex-shrink-0 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-greenwise-text">Based on their current reduction rate of 5% annually and offsetting practices, Company X would need to accelerate efforts by 15% to meet their 2030 goal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
