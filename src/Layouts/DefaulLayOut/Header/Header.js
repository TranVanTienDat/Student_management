import {
  faArrowRightFromBracket,
  faBars,
  faBell,
  faCircleInfo,
  faIdBadge,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useProSidebar } from 'react-pro-sidebar';
import { useDispatch } from 'react-redux';
import images from '~/assets/images';
import styles from './header.module.scss';
const cx = classNames.bind(styles);

function Header() {
  const { collapseSidebar } = useProSidebar();
  const handleMenu = () => collapseSidebar();
  return (
    <div className={cx('header')}>
      <div className={cx('inner')}>
        {/*  gồm có logo, menu-sideBar */}
        <div className={cx('menu')}>
          {/* <Sidebar>
            <Menu>
              <MenuItem> */}
          <div className={cx('logo')}>
            <img
              src={images.logo}
              alt="onlineFood"
              className={cx('logo-img')}
            />
          </div>
          {/* </MenuItem>
            </Menu>
          </Sidebar> */}
          <span className={cx('menu-icon')} onClick={handleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </span>

          <div className={cx('search')}>
            <input className={cx('input')} placeholder="search here" />
            <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={cx('action')}>
          <div className={cx('user')}>
            <span className={cx('message')}>
              <FontAwesomeIcon className={cx('message-icon')} icon={faBell} />
            </span>

            <Tippy
              arrow={true}
              interactive={true}
              duration={10000}
              render={(attrs) => (
                <ul className={cx('menu__user')} {...attrs} tabIndex="-1">
                  <li className={cx('menu__item')}>
                    <FontAwesomeIcon
                      className={cx('menu__icon')}
                      icon={faIdBadge}
                    />
                    My account
                  </li>
                  <li className={cx('menu__item')}>
                    <FontAwesomeIcon
                      className={cx('menu__icon')}
                      icon={faCircleInfo}
                    />
                    Feedback and help
                  </li>
                  <li className={cx('menu__item')}>
                    <FontAwesomeIcon
                      className={cx('menu__icon')}
                      icon={faArrowRightFromBracket}
                    />
                    Log out
                  </li>
                </ul>
              )}
            >
              <img
                className={cx('user-avatar')}
                src={images.chicken}
                alt=""
              ></img>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
