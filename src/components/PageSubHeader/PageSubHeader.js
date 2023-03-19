import classNames from 'classnames/bind';
import styles from './PageSubHeader.module.scss';

const cx = classNames.bind(styles);

function PageSubHeader() {
  return (
    <div className={cx('wrapper')}>
      <h3 className={cx('title')}>Welcome Admin!</h3>
      <ul className={cx('breadcrumb')}>
        <li className={cx('item')}>Home</li>
        <li className={cx('item')}>Admin</li>
      </ul>
    </div>
  );
}

export default PageSubHeader;
