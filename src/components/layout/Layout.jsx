
import React from 'react';
import * as styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className="pt-16 max-w-4xl mx-auto mt-12 mb-0 flex-initial">
      {children}
    </div> 
  );
}

export default Layout;