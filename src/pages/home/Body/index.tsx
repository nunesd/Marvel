import React, { FC } from 'react';

import './styles.css';

const Body = () => {
  return (
    <section className="container">
      <header className="search">
        <div className="input-wrapper">
          <input type="text" placeholder="Pesquisar quadrinho" />
        </div>
      </header>
    </section>
  );
};

export default Body;
