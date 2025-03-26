
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircleQuestion, ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-greenwise-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Start Uncovering the Truth Today</h2>
            <p className="text-lg text-blue-100">
              Join thousands of consumers and businesses using Grnwize to navigate the complex world of corporate sustainability claims.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p>Get instant answers about sustainability claims</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p>Understand complex environmental terms and practices</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-600 rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p>Make informed decisions based on reliable information</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircleQuestion className="mr-2 h-5 w-5" /> Start Chatting Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-4">What Our Users Are Asking</h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm">"How can I identify if a company's 'carbon neutral' claim is legitimate?"</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm">"What does 'biodegradable packaging' actually mean in practice?"</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm">"Is Company X's sustainability report aligned with industry standards?"</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm">"What sustainability certifications are most reliable for the textile industry?"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
