import React from 'react';

import { ComicType } from './types';

import './styles.css';

const Comic = ({ isDetail, onClick, ...comic }: ComicType): JSX.Element => {
  const { id, img, title, printPrice, digitalPrice } = comic;

  return (
    <div
      className={`comic-container${!isDetail ? ' list' : ''}`}
      onClick={() => onClick && onClick(comic)}
    >
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {isDetail && (
        <div className="paragraphs">
          <p>Identificador: {id}</p>

          <p>
            Preço de impressão:{' '}
            {printPrice ? `USD ${printPrice}` : 'indefinido'}
          </p>

          <p>
            Preço digital: {digitalPrice ? `USD ${digitalPrice}` : 'indefinido'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Comic;
