import React from "react";
import { MessageCircleQuestion, Leaf, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-greenwise-gray to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  Truth in Sustainability
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-greenwise-dark-blue">
                Uncover the truth behind{" "}
                <span className="text-green-600">sustainability claims</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-md">
              Grnwize helps you navigate corporate sustainability claims and
                identify greenwashing with AI-powered insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/chat"}>
                <Button
                  size="lg"
                  className="bg-greenwise-dark-blue hover:bg-blue-900 text-white"
                >
                  Try Grnwize now
                </Button>
              </Link>
              {/* <Button variant="outline" size="lg" className="border-greenwise-dark-blue text-greenwise-dark-blue hover:bg-greenwise-light-blue">
                Learn More
              </Button> */}
            </div>

            {/* <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>Evidence-based</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircleQuestion className="w-5 h-5 text-green-600" />
                <span>24/7 Assistance</span>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-greenwise-dark-blue flex items-center justify-center">
                    <MessageCircleQuestion className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-greenwise-dark-blue">
                  Grnwize AI
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></div>
              </div>

              <div className="bg-greenwise-gray rounded-lg p-4 mb-4">
                <p className="text-sm text-greenwise-text">
                  What is greenwashing and how can I identify it?
                </p>
              </div>

              <div className="bg-greenwise-light-blue rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-greenwise-dark-blue flex-shrink-0 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-greenwise-text mb-2">
                      Greenwashing involves making misleading or unsubstantiated
                      claims about environmental benefits of a product or
                      service.
                    </p>
                    <p className="text-sm text-greenwise-text">
                      Look for vague terms, lack of evidence, hidden trade-offs,
                      and cherry-picked information when evaluating
                      sustainability claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
