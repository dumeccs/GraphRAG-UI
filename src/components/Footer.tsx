import React from "react";
import {
  Leaf,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-greenwise-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="space-y-4 text-cente flex items-center flex-col">
            <div className="flex items-center space-x-2 text-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Leaf className="w-5 h-5 text-greenwise-dark-blue" />
              </div>
              <span className="font-bold text-xl">Grnwize</span>
            </div>
            <p className="text-blue-100 w-3/4 text-center">
              Helping businesses and consumers navigate sustainability claims
              with clarity and confidence.
            </p>
            {/* <div className="flex space-x-4 pt-2">
              <a href="#" className="text-blue-100 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>
          {/* 
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-blue-100 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-blue-100 hover:text-white"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-blue-100 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white">
                  Sustainability Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white">
                  Greenwashing Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white">
                  Industry Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white">
                  Case Studies
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-100" />
                <a href="mailto:info@greenwise.ai" className="text-blue-100 hover:text-white">info@greenwise.ai</a>
              </p>
              <p className="text-blue-100 mt-4">
                Sign up for our newsletter to stay updated on sustainability trends and insights.
              </p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Grnwize. All rights reserved.</p>
          <div className="mt-2 space-x-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
