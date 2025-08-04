import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`w-full bg-global-1 text-global-4 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="text-center">
            <p className="text-sm font-poppins">
              © 2024 SkillLink. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;