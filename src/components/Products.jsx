import React from 'react';
import { Leaf, Droplets, Wheat, Banana, Popcorn as Corn, Carrot } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Leaf,
      name: 'Premium Cassava',
      description: 'Fresh cassava roots and processed flour from our Delta State farms',
      features: ['100% Natural', 'High Starch Content', 'Export Quality'],
      image: 'https://images.pexels.com/photos/7175398/pexels-photo-7175398.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Banana,
      name: 'Fresh Plantains',
      description: 'Hand-picked plantains at perfect ripeness for cooking and eating',
      features: ['Perfectly Ripened', 'Rich in Nutrients', 'Various Sizes'],
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Corn,
      name: 'Quality Maize',
      description: 'Golden maize grains perfect for processing and animal feed',
      features: ['High Yield Variety', 'Pest Resistant', 'Consistent Quality'],
      image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wheat,
      name: 'Premium Yam',
      description: 'Large, healthy yam tubers known for their taste and nutritional value',
      features: ['Large Size', 'Great Taste', 'Long Storage Life'],
      image: 'https://images.pexels.com/photos/6408846/pexels-photo-6408846.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Droplets,
      name: 'Pure Palm Oil',
      description: 'Unrefined, pure red palm oil extracted using traditional methods',
      features: ['Unrefined', 'Rich in Vitamins', 'Traditional Processing'],
      image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Carrot,
      name: 'Fresh Vegetables',
      description: 'Seasonal vegetables including tomatoes, peppers, and leafy greens',
      features: ['Seasonal Variety', 'Pesticide Free', 'Farm Fresh Daily'],
      image: 'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-emerald-500 to-emerald-600'
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2A5C1A] mb-4">
            Our Premium <span className="text-[#D4AF37]">Products</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of agricultural products, 
            each one representing the best of Delta State's fertile lands
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                    <IconComponent className="h-5 w-5 text-[#2A5C1A]" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2A5C1A] mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-[#2A5C1A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e4213] transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2A5C1A] to-[#1e4213] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Custom Quantities or Bulk Orders?</h3>
            <p className="text-lg mb-6 opacity-90">
              We offer competitive pricing for bulk purchases and can customize our products to meet your specific needs
            </p>
            <button className="bg-[#D4AF37] text-[#2A5C1A] px-8 py-3 rounded-lg font-semibold hover:bg-[#c49b2a] transition-colors duration-200">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;