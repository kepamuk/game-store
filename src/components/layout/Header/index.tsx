import Navbar from '../Navbar';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <h1>Logo</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
