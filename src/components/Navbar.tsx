import React, { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-greenwise-dark-blue flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-greenwise-dark-blue">
                Elohgrnwize
              </span>
            </a>
          </div>

          {!isMobile ? (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-greenwise-dark-blue"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-greenwise-dark-blue"
                >
                  How It Works
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-greenwise-dark-blue"
                >
                  About
                </a>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-greenwise-dark-blue"
                >
                  FAQ
                </a>
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                {/* <Button variant="outline" className="border-greenwise-dark-blue text-greenwise-dark-blue">
                  Log In
                </Button> */}
                <Link href="/chat">
                  <Button className="bg-greenwise-dark-blue hover:bg-blue-900 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-greenwise-dark-blue" />
              ) : (
                <Menu className="h-6 w-6 text-greenwise-dark-blue" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-greenwise-dark-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-greenwise-dark-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-greenwise-dark-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-greenwise-dark-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <Link href={"/chat"}>
              <Button className="w-full bg-greenwise-dark-blue hover:bg-blue-900 text-white mb-2">
                Get Started
              </Button>
            </Link>
            {/* <Button variant="outline" className="w-full border-greenwise-dark-blue text-greenwise-dark-blue">
              Log In
            </Button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
