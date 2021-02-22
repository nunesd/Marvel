import React, { useEffect, useState } from 'react';
import useDebounce from './hooks';

import { HeaderType } from './types';

import './styles.css';

const Header = ({
  onSearchPerTitle,
  onSearchPerYear,
}: HeaderType): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchYear, setSearchYear] = useState<string>('');
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const debouncedText = useDebounce(searchText);
  const debouncedYear = useDebounce(searchYear);

  const onChangeInput = (value: string, type: 'text' | 'year') => {
    type === 'year' ? setSearchYear(value) : setSearchText(value);
  };

  useEffect(() => {
    setFirstLoad(true);
  }, []);

  useEffect(() => {
    if (firstLoad) {
      onSearchPerYear(
        Number(debouncedYear) === NaN && debouncedYear.toString().length
          ? undefined
          : Number(debouncedYear),
      );
    }
  }, [debouncedYear]);

  useEffect(() => {
    if (firstLoad) {
      onSearchPerTitle(debouncedText);
    }
  }, [debouncedText]);

  return (
    <header className="search">
      <input
        type="text"
        value={searchText}
        placeholder="Pesquisar por título"
        onChange={({ target: { value } }) => {
          onChangeInput(value, 'text');
        }}
      />

      <input
        type="text"
        value={searchYear}
        placeholder="Pesquisar por ano"
        onChange={({ target: { value } }) => onChangeInput(value, 'year')}
      />
    </header>
  );
};

export default Header;
