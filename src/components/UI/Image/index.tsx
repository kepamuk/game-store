import { CSSProperties, forwardRef, LegacyRef } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const cx = classNames.bind(styles);

type ImageProps = {
  className?: string;
  url?: string;
  style?: CSSProperties;
  eager?: boolean;
  alt?: string;
  onLoad?: (event?: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onError?: (event?: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

const Image = forwardRef(
  (
    { className = '', url, style, eager, alt, onLoad, onError }: ImageProps,
    ref: LegacyRef<HTMLImageElement> | undefined,
  ) => (
    <img
      ref={ref}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      src={url}
      alt={alt}
      className={cx(styles.image, className)}
      onLoad={onLoad}
      onError={onError}
    />
  ),
);

export { Image };
