import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type{ Olympic } from '../../core/models/Olympic';
import styles from './PieChart.module.css';

interface Props {
  data: Olympic[];
  onSliceClick: (id: number) => void;
}

const COLORS = ['#793d52', '#89a1db', '#9780a1', '#bfe0f1', '#b8cbe7', '#956065'];

const OlympicPieChart = ({ data, onSliceClick }: Props) => {
  const chartData = data.map((olympic) => ({
    id: olympic.id,
    name: olympic.country,
    value: olympic.participations.reduce((sum, p) => sum + p.medalsCount, 0),
  }));

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            dataKey="value"
            label={({ name }) => name}
          // onClick={(entry) => onSliceClick(entry.id)}
          onClick={(_, index) => onSliceClick(chartData[index].id)}
            style={{ cursor: 'pointer' }}
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} médailles`, '']} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OlympicPieChart; 