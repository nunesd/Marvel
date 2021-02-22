import React from 'react';

import logo from '../../../assets/marvel-logo.svg';

import './styles.css';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <img src={logo} alt="Logo da Marvel" />
    </div>
  );
};

export default Header;
