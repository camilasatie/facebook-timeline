import React from 'react';
import facebook from '../assets/facebook.png';

const Header = () => (
  <header id="main-header">
    <nav>
      <img src={facebook} />
      <div>
        <span>Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </div>
    </nav>
  </header>
);

export default Header;
