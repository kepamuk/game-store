import { FC, useRef, useEffect, useState } from 'react';

import GameList from './GameList';
import { Game, useGetGamesQuery } from '../../../services/games';
import GameListFiltration from './GameListFiltration';

import styles from './styles.module.scss';

const options = [
  { value: 'web', title: 'WEB' },
  { value: 'mobile', title: 'Mobile' },
  { value: 'download', title: 'Download' },
];

interface IHomeProps {}

const PAGE_SIZE = 12;

const Home: FC<IHomeProps> = () => {
  const { data, isLoading } = useGetGamesQuery(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGameData, setFilteredGameData] = useState<Game[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  // Game list pagination
  const gameData = filteredGameData.slice(0, currentPage * PAGE_SIZE);
  
  // Game list preload scrolling with IntersectionObserver API
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  useEffect(() => {
    // Фильтрация данных на основе searchQuery и selectedPlatform
    const filterData = async () => {
      const filteredData = data?.result.filter((game) => {
        const matchesSearch = game.gameName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesSearch;
      });

      setFilteredGameData(filteredData ?? []);
      setCurrentPage(1); // Сбросить страницу при изменении фильтра или поиска
    };

    filterData();
  }, [data, searchQuery]);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Games</h1>
      <GameListFiltration
        options={options}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
      />
      <GameList
        gameData={gameData}
        err={data?.error_message}
        loading={isLoading}
      />
      <div ref={observerTarget} />
    </div>
  );
};

export default Home;
