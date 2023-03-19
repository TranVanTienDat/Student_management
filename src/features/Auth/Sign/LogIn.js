import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button/Button';
import styles from './Sign.module.scss';

const cx = classNames.bind(styles);
function LogIn() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/home');
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('background')}>
        <div className={cx('shape')}></div>
        <div className={cx('shape')}></div>
      </div>
      <form className={cx('form')}>
        <h3 className={cx('heading')}>SINH VIÊN </h3>

        <label htmlFor="username">Mã sinh viên</label>
        <input type="text" id="username" />

        <label htmlFor="password">Mật khẩu</label>
        <input type="password" placeholder="Password" id="password" />

        <Button onClick={handleNavigate}>Đăng nhập</Button>
      </form>
    </div>
  );
}

export default LogIn;
