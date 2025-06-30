import React from 'react';
import { Truck, Shield, Users, Zap, Package, HeadphonesIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Farm-to-Door Delivery',
      description: 'Direct delivery from our farms to your location with cold chain management to maintain freshness',
      benefits: ['Same-day delivery in Delta State', 'Cold storage transport', 'Tracking system']
    },
    {
      icon: Package,
      title: 'Custom Processing',
      description: 'Tailored processing services including cassava flour milling, yam processing, and palm oil extraction',
      benefits: ['Quality control testing', 'Custom packaging', 'Bulk processing available']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control measures ensure every product meets international standards',
      benefits: ['Lab testing certification', 'NAFDAC compliance', 'Export documentation']
    },
    {
      icon: Users,
      title: 'Farmer Partnership',
      description: 'We work with local farmers to ensure sustainable practices and fair pricing',
      benefits: ['Training programs', 'Equipment support', 'Market access guarantee']
    },
    {
      icon: Zap,
      title: 'Quick Order Processing',
      description: 'Streamlined ordering system with same-day processing for urgent requirements',
      benefits: ['Online ordering platform', '24-hour response time', 'Priority customer support']
    },
    {
      icon: HeadphonesIcon,
      title: 'Customer Support',
      description: 'Dedicated support team available to assist with orders, deliveries, and product information',
      benefits: ['24/7 support hotline', 'WhatsApp ordering', 'Agricultural consultation']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5C1A] mb-4">
            Our <span className="text-[#D4AF37]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural services designed to meet all your farming and produce needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#2A5C1A] to-[#1e4213] p-4 rounded-2xl w-fit mb-6">
                  <IconComponent className="h-8 w-8 text-[#D4AF37]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#2A5C1A] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Benefits */}
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#2A5C1A] mb-4">How We Work</h3>
            <p className="text-lg text-gray-600">Simple steps to get premium agricultural products delivered to you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Contact Us', desc: 'Reach out via phone, WhatsApp, or our website' },
              { step: '02', title: 'Select Products', desc: 'Choose from our range of premium agricultural products' },
              { step: '03', title: 'Quality Check', desc: 'We ensure all products meet our high standards' },
              { step: '04', title: 'Fast Delivery', desc: 'Quick and secure delivery to your location' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-[#D4AF37] text-[#2A5C1A] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-[#2A5C1A] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 transform translate-x-1/2 w-full h-0.5 bg-[#D4AF37] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;