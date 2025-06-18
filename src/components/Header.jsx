// src/components/Header.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white  shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <Link to="/" className="text-2xl font-bold text-blue-600">ESMCC</Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/#demo" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition">
            <LightBulbIcon className="h-1 w-1
             mr-1" />
            Request Demo
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/features" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Features</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/#demo" onClick={toggleMenu} className="block text-blue-600 font-medium">Request Demo</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
