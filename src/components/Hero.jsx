import React from 'react';
import { ArrowRight, Leaf, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Hide video and show fallback background if video fails to load
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundImage = 'url(https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1920)';
            e.target.parentElement.style.backgroundSize = 'cover';
            e.target.parentElement.style.backgroundPosition = 'center';
          }}
        >
          {/* Your local video - war video in src/assets/video folder */}
          <source
            src="/src/assets/video/war.mp4"
            type="video/mp4"
          />
          {/* Try different extensions in case the file has a different format */}
          <source
            src="/src/assets/video/war.mov"
            type="video/quicktime"
          />
          <source
            src="/src/assets/video/war.webm"
            type="video/webm"
          />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            display: 'none'
          }}
        ></div>
        
        {/* Enhanced cinematic overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/80 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        {/* Brand color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A5C1A]/40 to-transparent opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="flex items-center space-x-2 text-[#D4AF37] animate-fade-in">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Delta State, Nigeria</span>
            </div>
            
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
                From Our Farms to{' '}
                <span className="text-[#D4AF37] animate-pulse">Your Table</span>
              </h1>
              <div className="w-24 h-1 bg-[#D4AF37] animate-expand"></div>
            </div>

            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-lg drop-shadow-lg animate-fade-in-delay">
              Premium agricultural products sourced directly from the fertile soils of Delta State. 
              We specialize in cassava, plantain, maize, yam, palm oil, and fresh vegetables.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-delay-2">
              {['Cassava', 'Plantain', 'Maize', 'Yam', 'Palm Oil', 'Vegetables'].map((product, index) => (
                <span 
                  key={product}
                  className="px-4 py-2 bg-[#D4AF37] text-[#2A5C1A] rounded-full font-semibold hover:bg-[#c49b2a] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {product}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <button className="bg-[#D4AF37] text-[#2A5C1A] px-8 py-4 rounded-lg font-semibold hover:bg-[#c49b2a] transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-2xl">
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#2A5C1A] transition-all duration-300 backdrop-blur-sm bg-white/25 bg-opacity-10 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced with Better Text Clarity */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Main Feature Card - Enhanced Background */}
            <div className="bg-white/25 backdrop-blur-xl p-8 rounded-3xl border-2 border-white/40 shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {/* Additional background layer for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 rounded-3xl"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#c49b2a] p-4 rounded-2xl shadow-lg">
                  <Leaf className="h-8 w-8 text-[#2A5C1A]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white drop-shadow-2xl filter brightness-110">100% Natural</h3>
                  <p className="text-gray-100 text-lg font-medium drop-shadow-lg">Farm Fresh Quality</p>
                </div>
              </div>
            </div>

            {/* Stats Grid - Enhanced Backgrounds */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '10+', label: 'Years Experience', color: 'from-green-400 to-green-600' },
                { number: '500+', label: 'Happy Customers', color: 'from-blue-400 to-blue-600' },
                { number: '24/7', label: 'Delivery Service', color: 'from-purple-400 to-purple-600' },
                { number: '3', label: 'Farm Locations', color: 'from-orange-400 to-orange-600' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl text-center border-2 border-white/50 shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white/40 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Additional contrast layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent drop-shadow-2xl filter brightness-125`}>
                      {stat.number}
                    </div>
                    <div className="text-white text-sm font-bold mt-2 drop-shadow-lg filter brightness-110">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Feature - Enhanced Background */}
            <div className="bg-gradient-to-r from-[#2A5C1A]/90 to-[#1e4213]/90 backdrop-blur-xl p-6 rounded-2xl border-2 border-[#D4AF37]/60 shadow-2xl relative overflow-hidden">
              {/* Additional contrast layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="text-[#D4AF37] font-bold text-lg mb-2 drop-shadow-lg filter brightness-110">🚚 Same Day Delivery</h4>
                <p className="text-white text-sm font-medium drop-shadow-lg filter brightness-110">Fresh from farm to your doorstep within hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;