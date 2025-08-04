import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ 
  isOpen = false, 
  onClose,
  className = ''
}) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'jobs', label: 'Jobs', icon: '💼' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-global-5 shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        ${className}
      `}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-global-1 font-poppins">
              Menu
            </h2>
            <button 
              onClick={onClose}
              className="lg:hidden text-global-2 hover:text-global-1"
            >
              ✕
            </button>
          </div>
          
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left
                      ${activeItem === item.id 
                        ? 'bg-button-1 text-global-4' :'text-global-2 hover:bg-gray-100 hover:text-global-1'
                      }
                    `}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span className="font-poppins">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Sidebar;