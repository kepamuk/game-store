import { FC } from 'react';

import ContentLoader from 'react-content-loader';

interface ISkeletonCardProps {}

const SkeletonCard: FC<ISkeletonCardProps> = (props) => (
  <ContentLoader
    speed={2}
    width={230}
    height={330}
    viewBox="0 0 230 330"
    backgroundColor="#b7b7b7"
    foregroundColor="#7b7b7b"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="230" height="330" />
  </ContentLoader>
);

export default SkeletonCard;
