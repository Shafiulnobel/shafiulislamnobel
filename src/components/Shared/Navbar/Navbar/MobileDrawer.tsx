import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ActiveLink from '../../../ActiveLink/ActiveLink';

const MobileDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-white text-black z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
    >
      <button onClick={onClose} className="absolute top-4 right-4">
        <FontAwesomeIcon icon={faXmark} className="text-3xl" />
      </button>

      {/* Container for centering the content */}
      <div className="flex flex-col justify-center items-center h-full">
        <ul className="flex flex-col items-center space-y-6 roboto-regular">
          {/* Apply transition to each list item */}
          {['/', '/about', '/services', '/contact'].map((link, index) => (
            <li
              key={link}
              className={`text-sm transform transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }} // Delay for staggered effect
            >
              <div onClick={onClose}>
                <ActiveLink to={link}>
                  {link === '/' ? 'HOME' : link.replace('/', '').toUpperCase()}
                </ActiveLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileDrawer;
