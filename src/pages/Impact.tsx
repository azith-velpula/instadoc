import React from 'react';
import { Heart, Home, Users, Package } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Through the generosity of our donors, we've made a significant difference in communities worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, stat: '1.2M+', label: 'Lives Impacted' },
              { icon: Home, stat: '50K+', label: 'Shelters Built' },
              { icon: Users, stat: '200+', label: 'Communities Served' },
              { icon: Package, stat: '500K+', label: 'Aid Packages Delivered' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <item.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Impact Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Impact Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rebuilding After the Storm",
                location: "Caribbean Islands",
                image: "https://images.unsplash.com/photo-1569437061241-5d6f0651b79c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Helped 1,000+ families rebuild their homes and restore their livelihoods after devastating hurricanes."
              },
              {
                title: "Emergency Medical Aid",
                location: "Southeast Asia",
                image: "https://images.unsplash.com/photo-1587653263995-422546a7a569?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Provided critical medical supplies and healthcare support to earthquake-affected regions."
              },
              {
                title: "Clean Water Initiative",
                location: "East Africa",
                image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Established sustainable clean water solutions for communities affected by severe drought."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-red-600 mb-3">{story.location}</p>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Voices from the Community</h2>
            <blockquote className="text-xl italic">
              "The support we received helped our entire community get back on its feet. We are forever grateful for the generosity of the donors and the efficiency of the relief efforts."
            </blockquote>
            <p className="mt-4 font-semibold">- Maria Rodriguez, Community Leader</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;