import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);

function IconCard() {
  return <div className={cx('wrapper')}></div>;
}

export default IconCard;
