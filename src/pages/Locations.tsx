import React from 'react';
import { colors } from '../types/colors';
import { MapPin, Zap, Target, Globe, Users, MessageSquare, ArrowRight, Layers } from 'lucide-react';

const Locations: React.FC = () => {
  const locationFeatures = [
    {
      icon: <Target size={32} color={colors.primary} />,
      title: 'Precision Targeting',
      description: 'Send messages to exact locations with adjustable boundaries. Control who sees your message based on geographic proximity.',
    },
    {
      icon: <Layers size={32} color={colors.primary} />,
      title: 'Flexible Boundaries',
      description: 'Set custom message boundaries from a few meters to several kilometers. Perfect for everything from room-specific to city-wide messages.',
    },
    {
      icon: <Zap size={32} color={colors.primary} />,
      title: 'Real-time Updates',
      description: 'Get instant notifications when someone enters your message boundary. See live activity and engagement in your designated areas.',
    },
    {
      icon: <Globe size={32} color={colors.primary} />,
      title: 'Global Reach',
      description: 'Send messages to any location worldwide. Connect with people at destinations you\'re planning to visit or have been to before.',
    }
  ];

  const useCases = [
    {
      title: 'Event Coordination',
      description: 'Organize meetups, parties, or conferences by sending messages to specific venues. Coordinate with attendees in real-time.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Events', 'Coordination', 'Social']
    },
    {
      title: 'Business Promotion',
      description: 'Reach potential customers in your area with location-based promotions and announcements. Target foot traffic effectively.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Business', 'Marketing', 'Local']
    },
    {
      title: 'Travel Planning',
      description: 'Connect with locals and fellow travelers at destinations. Get insider tips and recommendations from people who are there.',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Travel', 'Tourism', 'Discovery']
    },
    {
      title: 'Community Building',
      description: 'Create neighborhood connections and local communities. Share information, organize activities, and build relationships.',
      image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Community', 'Neighborhood', 'Social']
    },
    {
      title: 'Emergency Alerts',
      description: 'Quickly notify people in specific areas about emergencies, safety concerns, or urgent information that affects the location.',
      image: 'https://images.pexels.com/photos/73909/pexels-photo-73909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Emergency', 'Safety', 'Alerts']
    },
    {
      title: 'Local Discovery',
      description: 'Find hidden gems, local favorites, and unique experiences by connecting with people who frequent the same locations.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Discovery', 'Local', 'Exploration']
    }
  ];

  return (
    <div style={{ backgroundColor: colors.dark }} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin size={48} color={colors.primary} />
                <span style={{ color: colors.primary }} className="text-lg font-medium">Location Messaging</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Send Messages to
                <span style={{ color: colors.primary }} className="block">Any Location</span>
              </h1>
              
              <p style={{ color: colors.gray }} className="text-xl leading-relaxed">
                Transform how you communicate with location-based messaging. Send targeted messages to specific places, set custom boundaries, and connect with people based on where they are.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  style={{ backgroundColor: colors.primary }}
                  className="px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  Try Location Messaging
                </button>
                
                <button className="group flex items-center justify-center space-x-3 px-8 py-4 border border-gray-600 bg-transparent text-white rounded-full text-lg font-medium hover:border-white transition-all duration-300 hover:scale-105">
                  <span>See Demo</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              {/* Interactive Map Demo */}
              <div 
                style={{ backgroundColor: colors.darkgray }}
                className="w-full h-96 rounded-3xl relative overflow-hidden border border-gray-700"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
                  }}
                ></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full animate-pulse"
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                    <div className="text-white font-semibold text-lg">Central Park</div>
                    <div style={{ color: colors.gray }} className="text-sm">Message boundary: 500m radius</div>
                  </div>
                </div>
                
                {/* Message Bubble */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div 
                    style={{ backgroundColor: colors.primary }}
                    className="rounded-2xl p-4"
                  >
                    <div className="text-black font-medium text-sm">
                      "Looking for tennis partners this afternoon! 🎾"
                    </div>
                    <div className="text-black text-xs mt-1 opacity-70">
                      3 people nearby • 2 replies
                    </div>
                  </div>
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
              Powerful Location Features
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Our advanced location messaging system gives you complete control over where and how your messages are delivered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationFeatures.map((feature, index) => (
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

      {/* Use Cases Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Endless Possibilities
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Discover how location messaging can transform communication across various scenarios and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                style={{ backgroundColor: colors.darkgray }}
                className="rounded-3xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        style={{ backgroundColor: colors.primary }}
                        className="px-2 py-1 rounded-full text-black text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p style={{ color: colors.gray }} className="text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  
                  <button className="group flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try It Yourself
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Experience the power of location messaging with our interactive demo. Select a location and see how easy it is to send targeted messages.
            </p>
          </div>
          
          <div 
            style={{ backgroundColor: colors.darkgray }}
            className="rounded-3xl p-12 border border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Select Location & Adjust Boundary
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-white text-sm font-medium block mb-2">Choose Location</label>
                    <select 
                      style={{ backgroundColor: colors.dark }}
                      className="w-full p-3 rounded-lg text-white border border-gray-600 focus:border-lime-500"
                    >
                      <option>Central Park, NYC</option>
                      <option>Golden Gate Park, SF</option>
                      <option>Hyde Park, London</option>
                      <option>Custom Location...</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium block mb-2">Message Boundary (radius)</label>
                    <input 
                      type="range" 
                      min="50" 
                      max="5000" 
                      defaultValue="500"
                      className="w-full"
                      style={{ accentColor: colors.primary }}
                    />
                    <div className="flex justify-between text-sm mt-1" style={{ color: colors.gray }}>
                      <span>50m</span>
                      <span className="font-medium">500m</span>
                      <span>5km</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium block mb-2">Your Message</label>
                    <textarea 
                      style={{ backgroundColor: colors.dark }}
                      className="w-full p-3 rounded-lg text-white border border-gray-600 focus:border-lime-500 resize-none"
                      rows={3}
                      placeholder="What would you like to share with people at this location?"
                    ></textarea>
                  </div>
                  
                  <button 
                    style={{ backgroundColor: colors.primary }}
                    className="w-full py-3 text-black rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
                  >
                    Send Location Message
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div 
                  className="w-full h-80 rounded-2xl bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: 'url(https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  
                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div 
                      className="w-6 h-6 rounded-full animate-pulse"
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                  </div>
                  
                  {/* Boundary Circle */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 opacity-70"
                    style={{ borderColor: colors.primary }}
                  ></div>
                  
                  {/* Info Box */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div 
                      style={{ backgroundColor: colors.darkgray }}
                      className="rounded-xl p-3 bg-opacity-90"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold text-sm">Central Park</div>
                          <div style={{ color: colors.gray }} className="text-xs">500m radius • 12 active users</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} color={colors.primary} />
                          <MessageSquare size={16} color={colors.primary} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Location Messaging Today
          </h2>
          
          <p style={{ color: colors.gray }} className="text-xl mb-12">
            Join the future of location-based communication. Send your first location message and discover a new way to connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              style={{ backgroundColor: colors.primary }}
              className="px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </button>
            
            <button className="group flex items-center space-x-3 px-8 py-4 border border-gray-600 bg-transparent text-white rounded-full text-lg font-medium hover:border-white transition-all duration-300 hover:scale-105">
              <span>Schedule Demo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;