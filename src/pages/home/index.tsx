import React, { useEffect } from 'react';

import Header from './Header';
import Body from './Body';

import { useComics } from './hooks';

import './styles.css';
import { HomeType } from './types';

const Home = (props: HomeType): JSX.Element => {
  const {
    fetchComics,
    fetchMoreComics,
    state: { limit, offset, size, comics, total },
  } = useComics(props);

  useEffect(() => {
    fetchComics({ limit, offset });
  }, []);

  const onSearchPerTitle = (text: string) => {
    fetchComics({ offset, limit, title: text });
  };

  const onSearchPerYear = (year?: number) => {
    fetchComics({ offset, limit, startYear: year });
  };

  const onSeeMore = () => {
    fetchMoreComics();
  };

  return (
    <main className="container" data-testid="container">
      <Header />
      <Body
        onSearchPerTitle={onSearchPerTitle}
        onSearchPerYear={onSearchPerYear}
        onSeeMore={onSeeMore}
        comics={comics}
        canSeeMore={size <= total}
      />
    </main>
  );
};

export default Home;
