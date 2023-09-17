import { FC } from 'react';

import Select, { IOptions } from '../../../UI/Select';
import SearchBar from '../../../UI/SearchBar/SearchBar';

import styles from './styles.module.scss';

interface IGameListFiltrationProps {
  options: IOptions[];
  searchQuery: string;
  setSearchQuery: (e: string) => void;
  selectedPlatform: string;
  setSelectedPlatform: (e: string) => void;
}

const GameListFiltration: FC<IGameListFiltrationProps> = ({
  options,
  searchQuery,
  setSearchQuery,
  selectedPlatform,
  setSelectedPlatform,
}) => {
  return (
    <div className={styles.container}>
      <Select
        label="Platform"
        options={options}
        selectId="platforms"
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default GameListFiltration;
