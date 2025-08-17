import React from 'react';
import { colors } from '../types/colors';
import { MapPin, Users, MessageSquare, Navigation, Star, ArrowRight, Play, Download } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <MapPin size={32} color={colors.primary} />,
      title: 'Location Boundary Messaging',
      description: 'Send messages to specific location boundaries and connect with people in targeted areas.'
    },
    {
      icon: <Users size={32} color={colors.primary} />,
      title: 'Find Nearby Buddies',
      description: 'Discover and connect with people around you based on your current location and interests.'
    },
    {
      icon: <MessageSquare size={32} color={colors.primary} />,
      title: 'One-on-One Chat',
      description: 'Have private conversations with your buddies and build meaningful connections locally.'
    },
    {
      icon: <Navigation size={32} color={colors.primary} />,
      title: 'Location Feed',
      description: 'Consume content and updates from locations you have visited or are currently at.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Local Explorer',
      content: 'Spotping changed how I explore my city. I can now connect with people at cafes, events, and parks instantly.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Digital Nomad',
      content: 'Perfect for meeting locals and finding hidden gems wherever I travel. The location-based messaging is brilliant.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Builder',
      content: 'As an event organizer, Spotping helps me create local communities and keep attendees engaged at venues.',
      rating: 5
    }
  ];

  return (
    <div style={{ backgroundColor: colors.dark }} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        
        <div className="relative z-20 text-center px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Connect Locally with
            <span style={{ color: colors.primary }} className="block mt-2">
              Spotping's Messaging App
              className="group p-8 rounded-2xl text-center hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-700 hover:border-lime-400 hover:shadow-2xl hover:shadow-lime-400/20 cursor-pointer"
          </h1>
              {/* Feature Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img 
                  src={
                    index === 0 ? 'https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' :
                    index === 1 ? 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' :
                    index === 2 ? 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' :
                    'https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
                  }
                  alt={feature.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
          
                <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {feature.icon}
                </div>
            Send messages and meet people at specific locations. Experience effortless local connections with Spotping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group flex items-center space-x-3 px-8 py-4 border-2 border-white bg-transparent text-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              <Play size={20} />
              <span>Explore</span>
            </button>
            
            <button 
              style={{ backgroundColor: colors.primary }}
              className="group flex items-center space-x-3 px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              <span>Join</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors duration-300">
                Connecting People Through Location-Based Messaging
              </h2>
              
              <p style={{ color: colors.gray }} className="text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Spotping is your go-to location-based messaging app, enabling users to send messages and connect with people at specific places, enhancing social interactions wherever you go.
              </p>
              
              <button className="group flex items-center space-x-3 px-8 py-4 border border-gray-600 bg-transparent text-white rounded-full text-lg font-medium hover:border-white transition-all duration-300 hover:scale-105">
                <span>Explore</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div 
                  style={{ backgroundColor: colors.primary }}
                  className="p-8 rounded-2xl text-center text-black"
                >
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-lg font-medium">Stay Connected</div>
                </div>
                
                <div 
                  style={{ backgroundColor: colors.darkgray }}
                  className="p-8 rounded-2xl text-center"
                >
                  <div style={{ color: colors.primary }} className="text-4xl font-bold mb-2">15</div>
                  <div className="text-white text-lg font-medium">Join Our Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Local Connection
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Discover how Spotping transforms the way you connect with people and places around you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{ backgroundColor: colors.darkgray }}
                className="p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-gray-500"
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p style={{ color: colors.gray }} className="text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Demo Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Location-Based Messaging
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              See how easy it is to send messages to specific locations and adjust boundaries for targeted communication.
            </p>
          </div>
          
          <div 
            style={{ backgroundColor: colors.darkgray }}
            className="rounded-3xl p-12 text-center border border-gray-700"
          >
            <div className="mb-8">
              <div 
                className="w-80 h-48 mx-auto rounded-2xl bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div 
                    style={{ backgroundColor: colors.primary }}
                    className="w-4 h-4 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Select Location & Send Messages
            </h3>
            
            <p style={{ color: colors.gray }} className="text-lg mb-8 max-w-2xl mx-auto">
              Choose any location on the map, adjust the message boundary, and connect with people in that specific area instantly.
            </p>
            
            <button 
              style={{ backgroundColor: colors.primary }}
              className="px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
            >
              Try Location Demo
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Users Say
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Join thousands of users who are already connecting locally with Spotping.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                style={{ backgroundColor: colors.darkgray }}
                className="group p-8 rounded-2xl border border-gray-700 hover:border-lime-400 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-400/20 cursor-pointer"
              >
                {/* User Avatar */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <img 
                      src={
                        index === 0 ? 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' :
                        index === 1 ? 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' :
                        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
                      }
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div 
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-gray-800"
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-white font-bold group-hover:text-lime-400 transition-colors duration-300">{testimonial.name}</div>
                    <div style={{ color: colors.gray }} className="text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={colors.primary} 
                      color={colors.primary}
                      className="group-hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                <p style={{ color: colors.lightgray }} className="text-lg mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Connect Locally?
          </h2>
          
          <p style={{ color: colors.gray }} className="text-xl mb-12">
            Download Spotping today and start building meaningful connections in your community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
          className="rounded-3xl p-12 text-center border border-gray-700 hover:border-lime-400 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-400/10"
              className="group flex items-center space-x-3 px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
              className="w-80 h-48 mx-auto rounded-2xl bg-cover bg-center relative overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer"
              <Download size={20} />
              <span>Download for iOS</span>
            </button>
            
            <button 
              style={{ backgroundColor: colors.primary }}
              className="group flex items-center space-x-3 px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
                  className="w-4 h-4 rounded-full animate-pulse"
              <Download size={20} />
                <div 
                  className="absolute w-8 h-8 rounded-full border-2 animate-ping"
                  style={{ borderColor: colors.primary }}
                ></div>
              <span>Download for Android</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;