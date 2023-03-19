import classNames from 'classnames/bind';
import BodyCard from '../BodyCard/BodyCard';
import styles from './PresentationCard.module.scss';
const cx = classNames.bind(styles);

function PresentationCard() {
  return (
    <BodyCard>
      <div className={cx('wrapper')}>
        <div className={cx('body')}>
          <div className={cx('table')}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th
                    style={{
                      padding: '10px 46px',
                    }}
                  >
                    Name
                  </th>
                  <th>Marks</th>
                  <th>Percentage</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <img
                      className={cx('avatar')}
                      src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-avatar-hai.jpg"
                      alt=""
                    />
                    <span className={cx('name')}>chi do</span>
                  </td>
                  <td>1180</td>
                  <td>98%</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <img
                      className={cx('avatar')}
                      src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-avatar-hai.jpg"
                      alt=""
                    />
                    <span className={cx('name')}>chi do</span>
                  </td>
                  <td>1180</td>
                  <td>98%</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <img
                      className={cx('avatar')}
                      src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-avatar-hai.jpg"
                      alt=""
                    />
                    <span className={cx('name')}>chi do</span>
                  </td>
                  <td>1180</td>
                  <td>98%</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <img
                      className={cx('avatar')}
                      src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-avatar-hai.jpg"
                      alt=""
                    />
                    <span className={cx('name')}>chi do</span>
                  </td>
                  <td>1180</td>
                  <td>98%</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <img
                      className={cx('avatar')}
                      src="https://toigingiuvedep.vn/wp-content/uploads/2021/05/anh-avatar-hai.jpg"
                      alt=""
                    />
                    <span className={cx('name')}>chi do</span>
                  </td>
                  <td>1180</td>
                  <td>98%</td>
                  <td>2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BodyCard>
  );
}

export default PresentationCard;
