"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <Hero />

        <section id="features">
          <Features />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-greenwise-dark-blue mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about sustainability and our
                platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-greenwise-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-3">
                  What is greenwashing?
                </h3>
                <p className="text-gray-600">
                  Greenwashing involves making misleading or unsubstantiated
                  claims about the environmental benefits of a product, service,
                  or company practice to appear more environmentally friendly
                  than they actually are.
                </p>
              </div>

              <div className="bg-greenwise-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-3">
                  How does Grnwize identify greenwashing?
                </h3>
                <p className="text-gray-600">
                grnwize analyzes claims against verified data, industry
                  standards, and regulatory requirements. We look for vague
                  language, missing evidence, hidden trade-offs, and
                  cherry-picked information.
                </p>
              </div>

              <div className="bg-greenwise-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-3">
                  Is Grnwize only for businesses?
                </h3>
                <p className="text-gray-600">
                  No, Grnwize is designed for both consumers seeking to make
                  informed choices and businesses looking to improve their
                  sustainability practices and communications.
                </p>
              </div>

              <div className="bg-greenwise-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-3">
                  What information sources does Grnwize use?
                </h3>
                <p className="text-gray-600">
                Grnwize draws from scientific research, regulatory
                  standards, industry best practices, third-party
                  certifications, and company-reported data to provide
                  comprehensive analysis.
                </p>
              </div>

              <div className="bg-greenwise-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-3">
                  Can Grnwize help with my company&apos;s sustainability
                  reporting?
                </h3>
                <p className="text-gray-600">
                  Yes, Grnwize can help identify potential greenwashing risks
                  in your communications and provide guidance on how to make
                  accurate, substantiated environmental claims.
                </p>
              </div>

              <div className="bg-greenwise-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-3">
                  How current is Grnwize&apos;s information?
                </h3>
                <p className="text-gray-600">
                  Our database is regularly updated to reflect the latest
                  sustainability research, regulatory changes, and company
                  practices to ensure our analysis remains relevant and
                  accurate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="about" className="py-20 bg-greenwise-light-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-greenwise-dark-blue mb-6">
                  About GreenWise
                </h2>
                <p className="text-gray-700 mb-4">
                  GreenWise was founded with a mission to bring transparency to
                  sustainability claims and help combat the rising tide of
                  greenwashing in corporate communications.
                </p>
                <p className="text-gray-700 mb-4">
                  In a world where environmental concerns are increasingly
                  important to consumers and stakeholders, we believe that
                  accurate information is essential for making meaningful
                  progress on sustainability.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team combines expertise in environmental science,
                  regulatory compliance, and artificial intelligence to create a
                  powerful tool that helps both businesses and consumers
                  navigate the complex landscape of sustainability claims.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      Founded by environmental scientists and tech experts
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      Partnered with leading sustainability certification bodies
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">
                      Committed to ongoing research and development
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white shadow-xl rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-2">
                        Our Mission
                      </h3>
                      <p className="text-gray-600">
                        To empower people with the knowledge and tools they need
                        to identify genuine sustainability efforts and hold
                        companies accountable for their environmental claims.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-2">
                        Our Vision
                      </h3>
                      <p className="text-gray-600">
                        A world where transparency in environmental
                        communication leads to meaningful action and real
                        sustainability progress.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-greenwise-dark-blue mb-2">
                        Our Values
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Scientific accuracy</li>
                        <li>Transparency</li>
                        <li>Educational empowerment</li>
                        <li>Continuous improvement</li>
                        <li>Accessible knowledge</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-greenwise-dark-blue rounded-lg transform rotate-6 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-600 rounded-lg transform -rotate-6 -z-10"></div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <CallToAction /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
