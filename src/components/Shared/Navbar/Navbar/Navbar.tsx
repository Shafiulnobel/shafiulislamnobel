import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LogoLink from './LogoLink';
import DesktopNavLinks from './DesktopNavLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileDrawer from './MobileDrawer';


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Desktop navbar */}
      <div className="hidden sm:flex justify-between items-center py-6 md:px-4">
        <LogoLink />
        <DesktopNavLinks />
      </div>

      {/* Mobile navbar */}
      <div className="sm:hidden flex justify-between items-center my-4 mx-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
};

export default Navbar;
