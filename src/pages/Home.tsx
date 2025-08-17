import React from 'react';
import { colors } from '../types/colors';
import { MessageSquare, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const Messages: React.FC = () => {
  const stories = [
    {
      title: "Lost Tourist Finds Local Help",
      subtitle: "How location-based messaging saved the day",
      story: "Sarah was visiting Tokyo and got completely lost in the subway system. Using Spotping, she sent a message to the Shibuya Station area asking for help. Within minutes, a local resident named Yuki responded with detailed directions and even offered to meet her at the station. This simple interaction turned into a friendship that lasted beyond Sarah's trip.",
      image: "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      impact: "Connected 2 strangers across cultures",
      category: "Travel"
    },
    {
      title: "Emergency Pet Rescue",
      subtitle: "Community comes together in crisis",
      story: "When Max's dog Luna escaped during a thunderstorm in Central Park, he was panicking. He used Spotping to send an urgent message to everyone in the park area. Dog lovers and joggers immediately started looking. Within 30 minutes, a family found Luna hiding under a bridge and contacted Max through the app. The community's quick response reunited them safely.",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      impact: "Mobilized 50+ locals in 30 minutes",
      category: "Emergency"
    },
    {
      title: "Food Truck Discovery",
      subtitle: "Finding hidden culinary gems",
      story: "Emma was working late downtown and craving something different from the usual fast food. She sent a message to her office building area asking about good food options. A colleague in the next building told her about an amazing Korean BBQ food truck that only comes on Wednesdays. Now it's become their weekly tradition to meet for lunch.",
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      impact: "Created weekly tradition for colleagues",
      category: "Food"
    },
    {
      title: "Study Group Formation",
      subtitle: "Academic collaboration made easy",
      story: "During exam season, Jake sent a message to the university library area looking for study partners for his economics exam. Three other students responded, and they formed a study group that met regularly. Not only did they all improve their grades, but they also became close friends who still meet up years after graduation.",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      impact: "Formed lasting friendships & improved grades",
      category: "Education"
    },
    {
      title: "Concert Buddy Connection",
      subtitle: "Shared experiences create bonds",
      story: "Lisa had tickets to see her favorite band but her friend cancelled last minute. She sent a message to the concert venue area looking for someone to attend with. She connected with Maria, who was in the same situation. They had an amazing time together and discovered they lived just a few blocks apart. They now attend concerts together regularly.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      impact: "Turned solo experience into lasting friendship",
      category: "Entertainment"
    },
    {
      title: "Neighborhood Watch Success",
      subtitle: "Community safety through connection",
      story: "When several break-ins occurred in Oak Street neighborhood, resident Tom used Spotping to organize the community. He sent messages to the entire street area, and neighbors started sharing information and coordinating watch schedules. The increased communication and vigilance led to a significant decrease in crime and a much stronger neighborhood bond.",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      impact: "Reduced local crime by 60%",
      category: "Safety"
    }
  ];

  return (
    <div style={{ backgroundColor: colors.dark }} className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <MessageSquare size={64} color={colors.primary} className="mx-auto mb-6" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stories of Connection
          </h1>
          
          <p style={{ color: colors.gray }} className="text-xl md:text-2xl mb-8 leading-relaxed">
            Real stories from real people who solved problems and built connections through Spotping's location-based messaging.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['All', 'Travel', 'Emergency', 'Food', 'Education', 'Entertainment', 'Safety'].map((category) => (
              <button
                key={category}
                style={{ backgroundColor: category === 'All' ? colors.primary : colors.darkgray }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  category === 'All' ? 'text-black' : 'text-white hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {stories.map((story, index) => (
              <div 
                key={index}
                style={{ backgroundColor: colors.darkgray }}
                className="group rounded-3xl overflow-hidden border border-gray-700 hover:border-lime-400 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-400/20 cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span 
                      style={{ backgroundColor: colors.primary }}
                      className="px-3 py-1 rounded-full text-black text-sm font-medium"
                    >
                      {story.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {story.title}
                  </h3>
                  
                  <p style={{ color: colors.primary }} className="text-lg font-medium mb-4">
                    {story.subtitle}
                  </p>
                  
                  <p style={{ color: colors.lightgray }} className="text-base leading-relaxed mb-6">
                    {story.story}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users size={16} color={colors.primary} />
                      <span style={{ color: colors.gray }} className="text-sm">
                        {story.impact}
                      </span>
                    </div>
                    
                    <button className="group flex items-center space-x-2 text-white hover:opacity-80 transition-opacity">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8">
        <div 
          style={{ backgroundColor: colors.darkgray }}
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center border border-gray-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Your Own Story?
          </h2>
          
          <p style={{ color: colors.gray }} className="text-lg mb-8">
            Join thousands of users who are creating meaningful connections through location-based messaging.
          </p>
          
          <button 
            style={{ backgroundColor: colors.primary }}
            className="px-8 py-4 text-black rounded-full text-lg font-bold hover:opacity-90 transition-opacity"
          >
            Start Your Story Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Messages;