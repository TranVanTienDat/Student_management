import classNames from 'classnames/bind';
import styles from './DefaultLayOut.module.scss';
import Header from './Header';
import SideBar from '../SideBar';
const cx = classNames.bind(styles);
function DefaultLayOut({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('flex')}>
        <div className={cx('side-Bar')}>
          <SideBar />
        </div>
        <div className={cx('con-tent')}>{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayOut;
