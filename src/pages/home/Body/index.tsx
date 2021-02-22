import React from 'react';

import Header from './Header';
import Comics from './Comics';

import { BodyProps } from './types';

import './styles.css';

const Body = ({
  onSearchPerTitle,
  onSearchPerYear,
  onSeeMore,
  comics,
  canSeeMore,
}: BodyProps): JSX.Element => {
  return (
    <section className="body-container">
      <Header
        onSearchPerTitle={onSearchPerTitle}
        onSearchPerYear={onSearchPerYear}
      />
      <Comics comics={comics} />
      <div className="button-container">
        {!!comics?.length && canSeeMore && (
          <button onClick={onSeeMore}>Ver Mais</button>
        )}
      </div>
    </section>
  );
};

export default Body;
