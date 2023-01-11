import Logo from '../assets/greydive.png';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div>
      {' '}
      {width < 992 ? (
        <div className={`container-fluid ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <Link to={'/'} className={`col-lg ${styles.image}`}>
              <img src={Logo} alt='greydive' className={styles.logo} />
            </Link>
            <Link className={`col-lg ${styles.link}`} to={'/form'}>
              Formulario
            </Link>
            <Link className={`col-lg ${styles.link}`} to={'/answers'}>
              Respuestas
            </Link>
          </div>
        </div>
      ) : (
        <div className={`container-fluid ${styles.container}`}>
          <div className={`row ${styles.row}`}>
            <div className='col-lg-1 '></div>
            <Link to={'/'} className={`col-lg-2 ${styles.image}`}>
              <img src={Logo} alt='greydive' className={styles.logo} />
            </Link>
            <div className='col-lg-4 '></div>
            <Link className={`col-lg-2 ${styles.link}`} to={'/form'}>
              Formulario
            </Link>
            <div className='col-lg-1 '></div>
            <Link className={`col-lg-2 ${styles.link}`} to={'/answers'}>
              Respuestas
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
