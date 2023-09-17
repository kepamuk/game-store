import { NavLink } from 'react-router-dom';

import { routes } from '../../../constants/routes';

import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to={routes.home.root}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        {routes.home.title}
      </NavLink>
      <NavLink
        to={routes.about.root}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        {routes.about.title}
      </NavLink>
      <NavLink
        to={routes.faq.root}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        {routes.faq.title}
      </NavLink>
    </nav>
  );
};

export default Navbar;
