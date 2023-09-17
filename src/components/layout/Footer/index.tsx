import { Link } from 'react-router-dom';

import { routes } from '../../../constants/routes';

import styles from './styles.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_logo}>
          <h1>Logo</h1>
        </div>
        <div className={styles.footer_list}>
          <Link to={routes.home.root}>{routes.home.title}</Link>
          <Link to={routes.about.root}>{routes.about.title}</Link>
          <Link to={routes.faq.root}>{routes.faq.title}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
