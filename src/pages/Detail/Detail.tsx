import { useParams, useNavigate } from 'react-router-dom';
import useOlympics from '../../core/hooks/useOlympics';
import OlympicLineChart from '../../components/LineChart/LineChart';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { olympics, loading, error } = useOlympics();
  const navigate = useNavigate();

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  const olympic = olympics.find((o) => o.id === Number(id));

if (!olympic) return (
  <div className={styles.container}>
    <button className={styles.back} onClick={() => navigate('/')}>
      ← Retour
    </button>
    <p>Pays non trouvé</p>
  </div>
);

  const totalMedals = olympic.participations.reduce((sum, p) => sum + p.medalsCount, 0);
  const totalAthletes = olympic.participations.reduce((sum, p) => sum + p.athleteCount, 0);

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate('/')}>
        ← Retour
      </button>
      <h1>{olympic.country}</h1>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Nombre d'entrées</span>
          <span className={styles.statValue}>{olympic.participations.length}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Total médailles</span>
          <span className={styles.statValue}>{totalMedals}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Total athlètes</span>
          <span className={styles.statValue}>{totalAthletes}</span>
        </div>
      </div>
      <OlympicLineChart participations={olympic.participations} />
    </div>
  );
};

export default Detail;