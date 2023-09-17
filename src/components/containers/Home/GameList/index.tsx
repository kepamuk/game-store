import { FC } from 'react';

import Card from '../../../UI/Card';
import { Game } from '../../../../services/games';
import SkeletonCard from '../../../UI/Skeleton/SkeletonCard';

import styles from './styles.module.scss';

interface IGameListProps {
  loading?: boolean;
  gameData?: Game[];
  err?: string;
}

const GameList: FC<IGameListProps> = ({ loading, gameData, err }) => {

  if (err) {
    return <p className={styles.textCenter}>Unable to fetch games</p>;
  }
  
  if (!loading && !gameData?.length) {
    return <p className={styles.textCenter}>No games available</p>;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.game_list}>
        {gameData && !loading
          ? gameData?.map((game) => {
              return (
                <li className={styles.game_list_item} key={game.gameID}>
                  <Card
                    gameId={game.gameID}
                    gameName={game.gameName}
                    gamePlatforms={game.platform}
                  />
                </li>
              );
            })
          : [...Array(20).keys()].map((idx) => {
              return <SkeletonCard key={idx} />;
            })}
      </ul>
    </div>
  );
};

export default GameList;
