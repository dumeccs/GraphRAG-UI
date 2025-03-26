
import React from 'react';
import { ShieldCheck, Search, Globe, Recycle, TrendingUp, Info } from 'lucide-react';

const featuresData = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Verify Claims",
    description: "Analyze and fact-check corporate sustainability claims to identify potential greenwashing."
  },
  {
    icon: <Search className="w-10 h-10 text-green-600" />,
    title: "In-depth Research",
    description: "Access comprehensive data on company sustainability practices and environmental impacts."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-green-600" />,
    title: "Track Progress",
    description: "Monitor companies' sustainability goals and their actual performance over time."
  },
  {
    icon: <Info className="w-10 h-10 text-green-600" />,
    title: "Educational Insights",
    description: "Learn about sustainability standards, certifications, and best practices."
  },
  {
    icon: <Globe className="w-10 h-10 text-green-600" />,
    title: "United Kingdom Focus",
    description: "Understand how sustainability claims and regulatory frameworks work in the United Kingdom."
  },
  {
    icon: <Recycle className="w-10 h-10 text-green-600" />,
    title: "Practical Advice",
    description: "Receive actionable guidance on how to promote genuine sustainability in business practices."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-greenwise-dark-blue mb-4">How Grnwize Helps You Navigate Sustainability</h2>
          <p className="text-gray-600">
            Our AI-powered chatbot provides comprehensive tools to help you understand and evaluate environmental claims.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-greenwise-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
