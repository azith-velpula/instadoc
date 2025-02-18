import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Video, Clipboard, Shield, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Health, Our Priority</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Connect with top healthcare professionals instantly. Quality care at your fingertips.
              </p>
              <Link
                to="/appointments"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Book Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive healthcare solutions for you and your family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
              <p className="text-gray-600">Schedule in-person or virtual appointments with top specialists</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Video Consultations</h3>
              <p className="text-gray-600">Connect with doctors from the comfort of your home</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clipboard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-Prescriptions</h3>
              <p className="text-gray-600">Get digital prescriptions and medical certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose InstaDoc</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start p-6">
              <Shield className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-gray-600">Your health data is protected with industry-leading security measures</p>
              </div>
            </div>

            <div className="flex items-start p-6">
              <Clock className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">Access healthcare services anytime, anywhere</p>
              </div>
            </div>

            <div className="flex items-start p-6">
              <Award className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Certified Doctors</h3>
                <p className="text-gray-600">Connect with verified and experienced healthcare professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Top Specialists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                specialty: "Cardiologist",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Dr. Michael Chen",
                specialty: "Neurologist",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Dr. Emily Williams",
                specialty: "Pediatrician",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Dr. James Wilson",
                specialty: "Dermatologist",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((doctor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 mb-4">{doctor.specialty}</p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;