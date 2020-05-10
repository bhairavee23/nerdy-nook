
import React from 'react';
import * as styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Container}>
      {children}
    </div> 
  );
}

export default Layout;