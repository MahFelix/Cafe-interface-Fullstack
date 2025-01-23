import React from 'react';
import './Header.css';
import Logo from '../../assets/cafelogo.png'
import Molde from '../../assets/MoldeInicial.png'

const App: React.FC = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="navbar-logo">CAFÉ AURORA </div>
        <ul className="navbar-links">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>TESTEMUNHAL</li>
        </ul>
      </nav>
      <img src={Molde} className='Molde'></img>
      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Cafe Aurora" className="logo-image" />
        </div>
        <div className="text-content">
          <h1>CAFE AURORA</h1>
          <p className="subtitle">O Sabor que Ilumina o Seu Dia</p>
          <p className="description">
            Experimente a harmonia perfeita entre aroma, qualidade e tradição em cada xícara.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;