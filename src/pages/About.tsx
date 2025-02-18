import React from 'react';
import { Shield, Target, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h1 className="text-4xl font-bold text-white mb-4">About DisasterRelief</h1>
              <p className="text-xl text-white">
                Dedicated to providing immediate assistance and long-term support to communities affected by natural disasters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                We believe in the power of immediate action and sustainable recovery. Our mission is to provide rapid, effective relief to communities affected by disasters while ensuring transparency and accountability in all our operations.
              </p>
              <p className="text-gray-600 text-lg">
                Through partnerships with local organizations and the support of our donors, we work to rebuild communities and restore hope.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: 'Trust', description: '100% secure donations' },
                { icon: Target, title: 'Impact', description: '90% funds to relief' },
                { icon: Users, title: 'Community', description: 'Local partnerships' },
                { icon: Globe, title: 'Reach', description: 'Global presence' }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <item.icon className="h-8 w-8 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Executive Director",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "20+ years experience in humanitarian aid and disaster relief operations."
              },
              {
                name: "Michael Chen",
                role: "Operations Director",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Expert in logistics and emergency response coordination."
              },
              {
                name: "Lisa Rodriguez",
                role: "Community Relations",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Specializes in community engagement and volunteer management."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-red-600 mb-3">{member.role}</p>
                 Continuing directly from the last `About.tsx` file content:

                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Transparency",
                description: "We maintain complete transparency in our operations and use of funds."
              },
              {
                title: "Efficiency",
                description: "Quick response and effective resource utilization in every mission."
              },
              {
                title: "Compassion",
                description: "Treating every individual with dignity and respect."
              },
              {
                title: "Sustainability",
                description: "Building long-term solutions for lasting community recovery."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl mb-8">
            Join us in making a difference. Every contribution counts.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;