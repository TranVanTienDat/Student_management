import classNames from 'classnames/bind';
import styles from './Card.module.scss';
const cx = classNames.bind(styles);
function Card({ title, number, src }) {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('data')}>
        <h4 className={cx('title')}>{title}</h4>
        <span className={cx('number')}>{number}</span>
      </span>
      <img className={cx('avatar')} src={src} alt="" />
    </div>
  );
}

export default Card;
