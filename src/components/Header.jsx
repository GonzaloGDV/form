import Logo from '../assets/greydive.png';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
  );
};

export default Header;
