import classNames from 'classnames/bind';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { dataBarChart } from './dataBarChart';
import styles from './Chart.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function BarChart() {
  const [barChart, setBarChart] = useState({
    labels: dataBarChart.map((data) => data.year),
    type: 'bar',
    datasets: [
      {
        label: 'boys',
        data: dataBarChart.map((data) => data.boys),
        backgroundColor: '#3d5ee1',
        borderWidth: 1,
        maxBarThickness: 7,
        borderRadius: 3,
      },
      {
        label: 'girls',
        data: dataBarChart.map((data) => data.girls),
        backgroundColor: '#9BD0F5',
        // barPercentage: 20,
        maxBarThickness: 7,
        borderRadius: 3,
      },
    ],
  });
  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('barChart')}
        style={{
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '10px',
          width: '100%',
        }}
      >
        <Bar data={barChart} />
      </div>
    </div>
  );
}

export default BarChart;
