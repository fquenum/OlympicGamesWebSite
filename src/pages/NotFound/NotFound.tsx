import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oups, la page que vous cherchez n'existe pas.</p>
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
    </div>
  );
};

export default NotFound;