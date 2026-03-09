import { useNavigate } from 'react-router-dom';
import useOlympics from '../../core/hooks/useOlympics';
import OlympicPieChart from '../../components/PieChart/PieChart';
import styles from './Home.module.css';

const Home = () => {
  const { olympics, loading, error } = useOlympics();
  const navigate = useNavigate();

  const handleSliceClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className={styles.container}>
      <h1>Medals per Country</h1>
      <p>{olympics.length} countries represented</p>
      <OlympicPieChart data={olympics} onSliceClick={handleSliceClick} />
    </div>
  );
};

export default Home;