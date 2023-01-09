import styles from './styles/App.module.css';
import Form from './pages/Form';
import Dashboard from './pages/Dashboard';
import Answers from './pages/Answers';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className={styles.container}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/form' element={<Form />} />
          <Route path='/answers' element={<Answers />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
