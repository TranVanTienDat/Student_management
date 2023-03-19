import classNames from 'classnames/bind';
import ActiveStudent from '~/components/ActiveStudent/ActiveStudent';
import MenuCard from '~/components/Card/MenuCard';
import BarChart from '~/components/Chart/BarChart';
import LineChart from '~/components/Chart/LineChart';
import PageSubHeader from '~/components/PageSubHeader/PageSubHeader';
import PresentationCard from '~/components/PresentationCard/PresentationCard';
import { dataMenuStudent } from '~/constants/dataMenuStudent';
import { dataSocialNetwork } from '~/constants/dataSocialNetwork';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <PageSubHeader />
      <MenuCard data={dataMenuStudent} />
      <div className={cx('chart')}>
        <LineChart />
        <BarChart />
      </div>
      <div className={cx('demo')}>
        <PresentationCard />
        <ActiveStudent />
      </div>
      <MenuCard data={dataSocialNetwork} />
    </div>
  );
}

export default Home;
