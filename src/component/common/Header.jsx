import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ 
  title = 'SkillLink',
  showNavigation = false,
  className = ''
}) => {
  return (
    <header className={`w-full bg-global-5 shadow-sm ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-global-1 font-poppins">
              {title}
            </h1>
          </div>
          
          {showNavigation && (
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-global-2 hover:text-global-1 transition-colors">
                Home
              </a>
              <a href="#" className="text-global-2 hover:text-global-1 transition-colors">
                About
              </a>
              <a href="#" className="text-global-2 hover:text-global-1 transition-colors">
                Contact
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  showNavigation: PropTypes.bool,
  className: PropTypes.string,
};

export default Header;