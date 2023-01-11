import styles from './styles/App.module.css';
import Form from './pages/Form';
import Home from './pages/Home';
import Answers from './pages/Answers';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/answers' element={<Answers />} />
        </Routes>
      </div>
      <footer>@ greydive. 2023</footer>
    </div>
  );
};

export default App;
