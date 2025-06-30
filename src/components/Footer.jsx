import React from 'react';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    'Premium Cassava',
    'Fresh Plantains',
    'Quality Maize',
    'Premium Yam',
    'Pure Palm Oil',
    'Fresh Vegetables'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' }
  ];

  return (
    <footer className="bg-[#2A5C1A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#D4AF37] p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-[#2A5C1A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GRIMS ENTERPRISE</h3>
                <p className="text-[#D4AF37] text-sm">From Our Farms to Your Table</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading agricultural enterprise in Delta State, Nigeria, specializing in premium 
              farm produce and sustainable farming practices. We connect farmers directly with consumers.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-[#1e4213] p-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#2A5C1A] transition-all duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#D4AF37]">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-gray-300 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <span>{product}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-[#D4AF37]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Delta State, Nigeria</p>
                  <p className="text-gray-400 text-sm">Multiple Farm Locations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+234 803 123 4567</p>
                  <p className="text-gray-400 text-sm">24/7 Customer Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@grimsenterprise.ng</p>
                  <p className="text-gray-400 text-sm">Business Inquiries</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-[#1e4213] p-4 rounded-lg">
              <h5 className="font-semibold text-[#D4AF37] mb-2">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-3">Get updates on fresh produce and special offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white text-gray-900 rounded-l-lg focus:outline-none text-sm"
                />
                <button className="bg-[#D4AF37] text-[#2A5C1A] px-4 py-2 rounded-r-lg hover:bg-[#c49b2a] transition-colors duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#1e4213]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GRIMS ENTERPRISE. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;