import { FC } from 'react';

import cx from 'classnames';

import styles from './styles.module.scss';

export interface IOptions {
  value: string;
  title: string;
}

interface ISelectProps {
  label: string;
  options: IOptions[];
  selectId: string;
  name?: string;
  className?: string;
  selectedPlatform: string;
  setSelectedPlatform: (e: string) => void;
}

const Select: FC<ISelectProps> = ({
  label,
  options,
  selectId,
  name,
  selectedPlatform,
  setSelectedPlatform,
  className = '',
}) => {
  return (
    <label className={styles.label} htmlFor={selectId}>
      {label}:
      <select
        name={name}
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
        id={selectId}
        className={cx(styles.select, className)}
      >
        <option value="">All</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
