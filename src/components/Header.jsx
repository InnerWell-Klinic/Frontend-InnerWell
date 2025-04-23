import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="fixed top-0 right-0 left-0 h-20 bg-white shadow-sm flex items-center justify-between px-6">
      {/* Center */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2">
        <Logo />
        <span className="text-gray-800 font-bold text-2xl">MediLab Hospital</span>
      </div>

      {/* Right side */}
      <div className="ml-auto flex items-center">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-3 focus:outline-none group"
          >
            <span className="text-gray-800 mr-3 font-medium text-xl group-hover:text-gray-600 transition-colors duration-200">Ferdy</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md">
              <img 
                src="/default-avatar.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23666666"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-3.314 0-6 1.343-6 3v2h12v-2c0-1.657-2.686-3-6-3z"/></svg>';
                }}
              />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
              <button
                onClick={() => {
                  console.log('Account clicked');
                  setIsDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                Account
              </button>
              <button
                onClick={() => {
                  console.log('Profile Settings clicked');
                  setIsDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                Profile Settings
              </button>
              <div className="border-t border-gray-50"></div>
              <button
                onClick={() => {
                  handleLogout();
                  setIsDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;