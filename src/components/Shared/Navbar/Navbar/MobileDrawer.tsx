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
      <button onClick={onClose} className="absolute top-5 right-5">
        <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
        </svg>
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
