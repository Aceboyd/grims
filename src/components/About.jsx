import React from 'react';
import { Award, Users, MapPin, Truck } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '500+', label: 'Happy Customers' },
    { icon: MapPin, number: '3', label: 'Farm Locations' },
    { icon: Truck, number: '24/7', label: 'Delivery Service' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5C1A] mb-4">
                Rooted in <span className="text-[#D4AF37]">Tradition</span>
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37]"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              GRIMS ENTERPRISE was born from a passion for agriculture and a commitment to bringing 
              the finest produce from Delta State's fertile lands to tables across Nigeria. Our 
              journey began with a simple belief: quality agricultural products should be accessible 
              to everyone.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We work directly with local farmers, implementing sustainable farming practices that 
              preserve our environment while ensuring the highest quality standards. From cassava 
              processing to palm oil extraction, every step is carefully monitored to maintain 
              freshness and nutritional value.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D4AF37]">
              <h3 className="text-xl font-bold text-[#2A5C1A] mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To bridge the gap between farmers and consumers by providing premium, 
                farm-fresh agricultural products while supporting local communities and 
                sustainable farming practices.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Agricultural farming"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-[#2A5C1A] bg-opacity-20 rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                    <div className="bg-[#2A5C1A] p-3 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <div className="text-3xl font-bold text-[#2A5C1A] mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;