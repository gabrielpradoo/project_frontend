import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logoImg from '../../assets/logo.webp';

const Header: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/sobre">Sobre Nós</Link>
        </li>
        <li>
          <Link to="/experiencia">A Experiencia</Link>
        </li>
        <li>
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/embarcacoes">Nossos Barcos</Link>
        </li>
        <li>
          <Link to="/reservas">Reserve Já</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
