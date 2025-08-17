import React from 'react';
import { colors } from '../types/colors';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: colors.darkgray }} className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Spotping</h3>
            <p style={{ color: colors.gray }} className="text-sm leading-relaxed">
              Connect locally with location-based messaging. Send messages and meet people at specific places.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Features</h4>
            <ul className="space-y-2">
              {['Location Messaging', 'Find Buddies', 'One-on-One Chat', 'Location Feed'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: colors.gray }} className="text-sm hover:opacity-80 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: colors.gray }} className="text-sm hover:opacity-80 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} color={colors.primary} />
                <span style={{ color: colors.gray }} className="text-sm">hello@spotping.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} color={colors.primary} />
                <span style={{ color: colors.gray }} className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} color={colors.primary} />
                <span style={{ color: colors.gray }} className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p style={{ color: colors.gray }} className="text-sm">
              © 2025 Spotping. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" style={{ color: colors.gray }} className="text-sm hover:opacity-80 transition-opacity">
                Privacy
              </a>
              <a href="#" style={{ color: colors.gray }} className="text-sm hover:opacity-80 transition-opacity">
                Terms
              </a>
              <a href="#" style={{ color: colors.gray }} className="text-sm hover:opacity-80 transition-opacity">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;