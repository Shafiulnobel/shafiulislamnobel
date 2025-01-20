import React from 'react';
import { Link } from 'react-router-dom'; // or 'next/link' for Next.js

const LogoLink = () => {
  return (
    <div>
      <Link to="/" className="text-2xl font-bold">
      <img className="w-10 md:w-10 lg:w-10" src="https://i.ibb.co.com/WyqK1Z6/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default LogoLink;