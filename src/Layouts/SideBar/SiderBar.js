import {
  faChalkboardTeacher,
  faChartLine,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef } from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
  MenuItemStyles,
} from 'react-pro-sidebar';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx('sidebar')}>
      <h2 className={cx('title')}>Main Menu</h2>
      <Sidebar
        width="258px"
        transitionDuration={1000}
        backgroundColor="#fff"
        rootStyles={{
          color: '#9e9e9e',
        }}
        collapsedWidth="66px"
      >
        <Menu
          menuItemStyles={{
            root: {
              fontSize: '1.6rem',
              fontWeight: 400,
            },
            icon: {
              color: '#3D5EE1',
            },
            // button: {
            //   [`&.${menuClasses.disabled}`]: {
            //     color: '#d359ff',
            //   },
            //   [`&.${menuClasses.active}`]: {
            //     color: '#fff',
            //   },
            // },
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? '#f5d9ff' : '#d359ff',
                  backgroundColor: active ? '#eecef9' : undefined,
                };
            },
          }}
        >
          <SubMenu
            label="Dashboard"
            icon={<FontAwesomeIcon icon={faChartLine} />}
          >
            <MenuItem> Admin Dashboard </MenuItem>
            <MenuItem> Teacher Dashboard </MenuItem>
            <MenuItem> Student Dashboard </MenuItem>
          </SubMenu>
          <SubMenu
            label="Students"
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <MenuItem> Student List </MenuItem>
            <MenuItem> Students View </MenuItem>
            <MenuItem> Students Add </MenuItem>
          </SubMenu>
          <SubMenu
            label="Teachers"
            icon={<FontAwesomeIcon icon={faChalkboardTeacher} />}
          >
            <MenuItem> Teacher List </MenuItem>
            <MenuItem> Teacher View </MenuItem>
            <MenuItem> Teacher Add </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
