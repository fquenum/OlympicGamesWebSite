import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Participation } from '../../core/models/Olympic';
import styles from './LineChart.module.css';

interface Props {
  participations: Participation[];
}

const OlympicLineChart = ({ participations }: Props) => {
  const chartData = participations.map((p) => ({
    year: p.year,
    medals: p.medalsCount,
  }));

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} médailles`, '']} />
          <Line
            type="monotone"
            dataKey="medals"
            stroke="#793d52"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OlympicLineChart;