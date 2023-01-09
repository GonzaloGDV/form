import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Link to={'/form'}>Formulario</Link>
      <Link to={'/answers'}>Respuestas</Link>
    </div>
  );
};

export default Dashboard;
