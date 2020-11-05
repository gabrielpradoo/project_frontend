import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Itinerary: React.FC = () => {
  return (
    <Container>
      <div className="itinerary-text">
        <h2>Pensansando em você</h2>
        <p>
          Para atender você da melhor maneira possível, nós idealizamos dois
          caminhos, o <Link to="/terra">Terra</Link> e o{' '}
          <Link to="/agua">Agua</Link>.
        </p>
      </div>

      <div className="itineraries">
        <div className="itinerary-earth">
          <div className="content">
            <span>Roteiro Terra</span>
            <Link className="btn" to="/terra">
              RESERVE JÁ
            </Link>
          </div>
        </div>
        <div className="itinerary-water">
          <div className="content">
            <span>Roteiro Água</span>
            <Link className="btn" to="/agua">
              Conheça
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Itinerary;
