import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../types/colors';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header style={{ backgroundColor: colors.dark }} className="py-6 px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-white hover:opacity-80 transition-opacity">
          Spotping
        </Link>
        
        <nav className="flex items-center space-x-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/messages', label: 'Messages' },
            { path: '/people', label: 'People' },
            { path: '/locations', label: 'Locations' }
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-lg font-medium transition-all duration-200 hover:scale-105 ${
                isActive(path)
                  ? `border-b-2 pb-1`
                  : 'hover:opacity-80'
              }`}
              style={{
                color: isActive(path) ? colors.primary : colors.lightgray,
                borderColor: isActive(path) ? colors.primary : 'transparent'
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;