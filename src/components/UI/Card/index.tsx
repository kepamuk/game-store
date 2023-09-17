import { FC } from 'react';

import { Link } from 'react-router-dom';

import { Image } from '../Image';
import { imgBaseURL } from '../../../constants/api';

import styles from './styles.module.scss';

interface ICardProps {
  gameId: string;
  gameName: string;
  gamePlatforms: string;
}

const Card: FC<ICardProps> = ({ gameId, gameName, gamePlatforms }) => {
  return (
    <Link to={'#'} className={styles.card_link}>
      <Image
        alt={`${gameName}-logo`}
        url={`${imgBaseURL + gameId + '.png'}`}
        className={styles.card_img}
      />
      <div className={styles.card_details}>
        <p className={styles.card_details_title}>{gameName}</p>
        <span className={styles.card_details_platform}>{gamePlatforms}</span>
      </div>
    </Link>
  );
};

export default Card;
