import React from 'react';
import { Users, Award, Leaf, Truck } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Emmanuel Grims',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years in agriculture, Emmanuel founded GRIMS ENTERPRISE to bridge the gap between farmers and consumers in Delta State.',
      expertise: ['Agricultural Management', 'Business Development', 'Sustainable Farming'],
      icon: Award
    },
    {
      name: 'Sarah Okoro',
      position: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah oversees daily operations and ensures quality control across all our farming and processing activities.',
      expertise: ['Operations Management', 'Quality Control', 'Supply Chain'],
      icon: Users
    },
    {
      name: 'Dr. Michael Eze',
      position: 'Agricultural Specialist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dr. Eze brings scientific expertise to our farming practices, ensuring optimal crop yields and sustainable methods.',
      expertise: ['Crop Science', 'Soil Management', 'Research & Development'],
      icon: Leaf
    },
    {
      name: 'James Okafor',
      position: 'Logistics Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'James manages our delivery network, ensuring fresh products reach customers quickly and efficiently across Nigeria.',
      expertise: ['Logistics Planning', 'Fleet Management', 'Customer Service'],
      icon: Truck
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5C1A] mb-4">
            Meet Our <span className="text-[#D4AF37]">Team</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The dedicated professionals behind GRIMS ENTERPRISE, working together to bring 
            you the finest agricultural products from Delta State
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Member Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A5C1A] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-[#D4AF37] font-semibold">{member.position}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <IconComponent className="h-5 w-5 text-[#2A5C1A]" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{member.bio}</p>
                  
                  {/* Expertise */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-[#2A5C1A] mb-2">Expertise:</h4>
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                        <span className="text-xs text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-[#2A5C1A] to-[#1e4213] p-8 rounded-2xl text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">50+</div>
              <div className="text-gray-200">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">25+</div>
              <div className="text-gray-200">Local Farmers Partnered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">1000+</div>
              <div className="text-gray-200">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">24/7</div>
              <div className="text-gray-200">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#2A5C1A] mb-4">Join Our Growing Team</h3>
            <p className="text-lg text-gray-600 mb-6">
              We're always looking for passionate individuals who share our commitment to 
              quality agriculture and sustainable farming practices
            </p>
            <button className="bg-[#2A5C1A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e4213] transition-colors duration-200">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;