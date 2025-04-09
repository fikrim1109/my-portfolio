import { useState } from 'react';
import Sidebar from './Sidebar';
import BurgerMenu from './BurgerMenu';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.layoutContainer}>
      <BurgerMenu isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <main className={`${styles.mainContent} ${isSidebarOpen ? styles.contentShift : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;