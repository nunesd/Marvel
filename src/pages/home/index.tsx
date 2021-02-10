import React, { useEffect, useState } from 'react';
import api from 'api';

import Header from './Header';
import Body from './Body';

import './styles.css';

const Home = () => {
  useEffect(() => {
    api().get('');
  }, []);

  return (
    <main className="container">
      <Header />
      <Body />
    </main>
  );
};

export default Home;
