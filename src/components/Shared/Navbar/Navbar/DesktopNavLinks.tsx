import React from 'react';
import ActiveLink from '../../../ActiveLink/ActiveLink';

const DesktopNavLinks = () => {
  return (
    <ul className="flex space-x-6 roboto-regular">
      <li className="text-sm hover:text-blue-900 hover:font-semibold">
        <ActiveLink to="/">HOME</ActiveLink>
      </li>
      <li className="text-sm hover:text-blue-900 hover:font-semibold">
        <ActiveLink to="/about">ABOUT</ActiveLink>
      </li>
      <li className="text-sm hover:text-blue-900 hover:font-semibold">
        <ActiveLink to="/services">EXPERIMENTS</ActiveLink>
      </li>
      <li className="text-sm hover:text-blue-900 hover:font-semibold">
        <ActiveLink to="/contact">CONTACT</ActiveLink>
      </li>
    </ul>
  );
};

export default DesktopNavLinks;