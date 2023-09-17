import { FC } from 'react';

import styles from './styles.module.scss';

interface ISearchBarProps {
  searchQuery: string;
  setSearchQuery: (e: string) => void;
}

const SearchBar: FC<ISearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        className={styles.searchbar}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <input type="submit" className={styles.search_submit} value="Search" />
    </div>
  );
};

export default SearchBar;
