
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="pt-16 max-w-4xl mx-auto mt-12 mb-0 min-h-full flex-grow	">
      {children}
    </div> 
  );
}

export default Layout;