import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>¡Bienvenidos al Challenge!</h1>
    </div>
  );
};

export default Dashboard;
