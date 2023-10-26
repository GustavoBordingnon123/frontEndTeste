import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    container: {
      height:  isMobile ? 'auto' : '80px',
      position: 'relative',
      backgroundColor: '',
      padding: isMobile ? '3% 5%' : '0 5%',
      display: 'flex',
      boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
      flex: isMobile ? '1' : 'none', // Adiciona flex-direction: column; se for móvel
      flexDirection: isMobile ? 'column' : 'row', // Adiciona flex-direction: column; se for móvel
      justifyContent: isMobile ? 'center' : 'space-between', // Adiciona justify-content: center; se for móvel
      alignItems: isMobile ? 'center' : 'center', // Adiciona align-items: center; se for móvel
    },
    logoContainer: {
      width: isMobile ? 'auto' : '100px',
      marginBottom: isMobile ? '10px' : '0',
      marginTop: isMobile ? '10px' : '0',
      height: '50px',
    },
    logoImg: {
      height: '100%',
      objectFit: 'contain',
    },
    navContainer: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    listItem: {
      margin: '0 10px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      textDecoration: 'none',
      transition: 'color 0.3s',
      color: '#191825',
    },
    activeListItem: {
      color: 'green',
    },
  };

  return (
    <div className="container" style={styles.container}>
      <div style={styles.logoContainer}>
        <NavLink to="/" style={styles.listItem} activeStyle={styles.activeListItem}>
          <img src="./logo.png" style={styles.logoImg} alt="Logo" />
        </NavLink>
      </div>

      <nav>
        <ul style={styles.navContainer}>
          <li>
            <NavLink to="/" style={styles.listItem} activeStyle={styles.activeListItem}>
              Clientes
            </NavLink>
          </li>
          <li style={styles.listItem}>|</li>
          <li>
            <NavLink to="/vendas" style={styles.listItem} activeStyle={styles.activeListItem}>
              Vendas
            </NavLink>
          </li>
          <li style={styles.listItem}>|</li>
          <li>
            <NavLink to="/produtos" style={styles.listItem} activeStyle={styles.activeListItem}>
              Produtos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
