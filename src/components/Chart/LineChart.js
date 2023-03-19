import { Line } from 'react-chartjs-2';
import { Chart as Chartjs } from 'chart.js/auto';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { dataLineChart } from './dataLineChart';
import styles from './Chart.module.scss';
const cx = classNames.bind(styles);
function LineChart() {
  const [userData, setUserData] = useState({
    labels: dataLineChart.map((data) => data.year),
    datasets: [
      {
        type: 'line',
        label: 'students',
        fill: false,
        tension: 0.3,
        data: dataLineChart.map((data) => data.students),
        backgroundColor: '#9BD0F5',
        borderColor: '#3D5EE1',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 20,
        CategoryScale: 700,
      },
      {
        label: 'teachers',
        data: dataLineChart.map((data) => data.teachers),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
          '#fff',
        ],
        tension: 0.3,
        borderColor: '#85CDD6',
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 20,
        borderDashOffset: 0.0,
        CategoryScale: 700,
      },
    ],
  });
  console.log(userData);
  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('line')}
        style={{
          // width: '550px',
          // height: '275px',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '10px',
          width: '100%',
        }}
      >
        <Line data={userData} />
      </div>
    </div>
  );
}

export default LineChart;
