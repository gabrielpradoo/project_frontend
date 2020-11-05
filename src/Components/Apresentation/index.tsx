import React from 'react';

import { Container } from './styles';

const Apresentation: React.FC = () => {
  return (
    <Container>
      <h2>Um Cruzeiro Inesquecível!</h2>

      <iframe
        title="video"
        src="https://www.youtube.com/embed/e7jJ1fmMLm0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default Apresentation;
