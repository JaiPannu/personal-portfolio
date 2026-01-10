import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <img 
        src="/JSPlogo.avif" 
        alt="JSP Logo" 
        className="site-logo"
        style={{ height: '40px', width: 'auto' }} /* Adjust styling as needed */
      />
    </nav>
  );
};

export default Navbar;