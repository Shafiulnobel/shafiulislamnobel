import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="p-2">
      <FontAwesomeIcon icon={faBars} className="text-3xl" />
    </button>
  );
};

export default MobileMenuButton;
