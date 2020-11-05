import React from 'react';
import Header from '../../Components/Header';
import Apresentation from '../../Components/Apresentation';
import Infos from '../../Components/Infos';
import Itinerary from '../../Components/Itinerary';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';

/* import comodoroImg from '../../assets/comodoro.svg'; */
/* import vipImg from '../../assets/vip.svg'; */

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Apresentation />
      <Infos />
      <Itinerary />
      <Carousel />
      <Footer />
    </Container>
  );
};

export default Home;
