import React from 'react';
import { colors } from '../types/colors';
import { Users, Heart, MapPin, MessageCircle, UserPlus, Sparkles, ArrowRight, Shield } from 'lucide-react';

const People: React.FC = () => {
  const buddyFeatures = [
    {
      icon: <MapPin size={32} color={colors.primary} />,
      title: 'Location-Based Discovery',
      description: 'Find people near your current location or at places you frequently visit. Our smart algorithm connects you with compatible individuals in your area.',
    },
    {
      icon: <Heart size={32} color={colors.primary} />,
      title: 'Interest Matching',
      description: 'Connect with people who share your hobbies, interests, and lifestyle preferences. Build meaningful relationships based on common ground.',
    },
    {
      icon: <Shield size={32} color={colors.primary} />,
      title: 'Safe & Verified',
      description: 'All users go through our verification process. Report and block features ensure a safe environment for everyone to connect.',
    },
    {
      icon: <Sparkles size={32} color={colors.primary} />,
      title: 'Smart Recommendations',
      description: 'Our AI learns your preferences and suggests buddies who are most likely to become genuine friends based on compatibility.',
    }
  ];

  const connectionSteps = [
    {
      step: '01',
      title: 'Set Your Location',
      description: 'Enable location services and set your preferred discovery radius. Choose how far you want to connect with people.',
      icon: <MapPin size={24} color={colors.primary} />
    },
    {
      step: '02',
      title: 'Create Your Profile',
      description: 'Add photos, interests, and a brief bio. The more complete your profile, the better matches you\'ll receive.',
      icon: <UserPlus size={24} color={colors.primary} />
    },
    {
      step: '03',
      title: 'Discover Buddies',
      description: 'Browse through potential buddies in your area. See their interests, mutual connections, and favorite locations.',
      icon: <Users size={24} color={colors.primary} />
    },
    {
      step: '04',
      title: 'Start Connecting',
      description: 'Send buddy requests and start conversations. Meet up at local spots you both love and build real friendships.',
      icon: <MessageCircle size={24} color={colors.primary} />
    }
  ];

  const successStories = [
    {
      names: 'Alex & Jamie',
      location: 'Coffee Corner, Downtown',
      story: 'Met through Spotping at their local coffee shop. Both were looking for workout partners and now they run marathons together.',
      duration: '2 years of friendship'
    },
    {
      names: 'Maria & Sarah',
      location: 'City Park, Eastside',
      story: 'Connected while walking their dogs in the same park. They now organize weekly dog meetups for the whole neighborhood.',
      duration: '1 year of friendship'
    },
    {
      names: 'David & Mike',
      location: 'Tech Hub, Silicon Valley',
      story: 'Both software developers who found each other through Spotping. They started a successful startup together.',
      duration: '3 years of friendship'
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
                <Users size={48} color={colors.primary} />
                <span style={{ color: colors.primary }} className="text-lg font-medium">Buddy System</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Find Your Local
                <span style={{ color: colors.primary }} className="block">Buddy Network</span>
              </h1>
              
              <p style={{ color: colors.gray }} className="text-xl leading-relaxed">
                Connect with like-minded people in your area. Our buddy system helps you build genuine friendships based on shared interests, proximity, and compatibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  style={{ backgroundColor: colors.primary }}
                  className="px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  Find Buddies Now
                </button>
                
                <button className="group flex items-center justify-center space-x-3 px-8 py-4 border border-gray-600 bg-transparent text-white rounded-full text-lg font-medium hover:border-white transition-all duration-300 hover:scale-105">
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="w-full h-96 rounded-3xl bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div 
                    style={{ backgroundColor: colors.darkgray }}
                    className="rounded-2xl p-4 bg-opacity-90"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                      <div>
                        <div className="text-white font-semibold">Emma & Lucas</div>
                        <div style={{ color: colors.gray }} className="text-sm">Connected at Central Park</div>
                      </div>
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
              How Buddy System Works
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Our innovative buddy system uses location intelligence and compatibility matching to help you find meaningful connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buddyFeatures.map((feature, index) => (
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

      {/* Connection Process */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Connecting in 4 Easy Steps
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              Our simple process makes it easy to find and connect with your local buddy network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  style={{ backgroundColor: colors.darkgray }}
                  className="p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      style={{ color: colors.primary }}
                      className="text-4xl font-bold opacity-50"
                    >
                      {step.step}
                    </span>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p style={{ color: colors.gray }} className="text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < connectionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight size={24} color={colors.primary} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Buddy Success Stories
            </h2>
            <p style={{ color: colors.gray }} className="text-xl max-w-3xl mx-auto">
              See how Spotping has helped people build lasting friendships and create their local communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={index}
                style={{ backgroundColor: colors.darkgray }}
                className="p-8 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {story.names}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin size={16} color={colors.primary} />
                    <span style={{ color: colors.primary }} className="text-sm font-medium">
                      {story.location}
                    </span>
                  </div>
                </div>
                
                <p style={{ color: colors.lightgray }} className="text-base leading-relaxed mb-6">
                  {story.story}
                </p>
                
                <div style={{ color: colors.gray }} className="text-sm font-medium">
                  {story.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Buddies?
          </h2>
          
          <p style={{ color: colors.gray }} className="text-xl mb-12">
            Join thousands of people who have found their local community through Spotping's buddy system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              style={{ backgroundColor: colors.primary }}
              className="px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              Start Finding Buddies
            </button>
            
            <button className="group flex items-center space-x-3 px-8 py-4 border border-gray-600 bg-transparent text-white rounded-full text-lg font-medium hover:border-white transition-all duration-300 hover:scale-105">
              <span>Watch Demo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;