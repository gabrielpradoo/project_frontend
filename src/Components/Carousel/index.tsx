import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import comodoroImg from '../../assets/comodoro.webp';
import comodoro1Img from '../../assets/comodoro1.webp';
import vipImg from '../../assets/vip.webp';
import vip1Img from '../../assets/vip1.webp';

import { Container } from './styles';

const SampleNextArrow: React.FC = () => {
  return <div style={{ display: 'none' }} />;
};

const SamplePrevArrow: React.FC = () => {
  return <div style={{ display: 'none' }} />;
};

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Slider className="carrosel" {...settings}>
        <div>
          <img src={comodoroImg} alt="Comodoro" />
        </div>
        <div>
          <img src={vipImg} alt="Vip" />
        </div>
        <div>
          <img src={comodoro1Img} alt="Comodoro" />
        </div>
        <div>
          <img src={vip1Img} alt="Vip" />
        </div>
      </Slider>
    </Container>
  );
};

export default Carousel;
