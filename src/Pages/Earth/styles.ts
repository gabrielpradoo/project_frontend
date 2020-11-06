import styled from 'styled-components';
import vipImg from '../../assets/vip.webp';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeaderImg = styled.div`
  position: relative;

  max-width: 1440px;
  width: 100%;
  height: 60vh;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${vipImg}) no-repeat center 70%;
  background-size: cover;

  > .opacity {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    > h2 {
      text-transform: uppercase;
      font-size: 3.7rem;
      color: var(--color-yellow-s);
    }
  }
`;

export const Main = styled.main`
  margin-top: 22px;

  display: flex;
  flex-direction: column;

  align-items: center;

  > h3 {
    font-size: 1.7rem;
  }

  > p {
    font-size: 1.3rem;
  }
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  position: relative;

  margin: 0 auto;

  max-width: 1440px;
  width: 100%;

  padding: 32px;

  > .day {
    position: relative;
    width: 80%;
    height: 550px;
    margin: 18px auto;

    border: 1px solid #80808067;

    border-radius: 8px;

    > .day-block {
      width: 100%;
      height: 60px;
      background: #999999;

      display: flex;

      border-top-left-radius: 7px;
      border-top-right-radius: 7px;

      margin-bottom: 32px;

      > p {
        width: 100px;
        height: 70px;
        background: var(--color-yellow);

        color: var(--color-white);
        font-size: 1.7rem;
        text-align: center;
        font-weight: 600;

        padding: 3% 0;

        margin: 0 18px;
      }

      > .day-block-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        > div {
          display: flex;
          align-items: center;

          > span {
            margin-left: 5px;
          }
        }
      }
    }

    > .day-content {
      position: relative;
      padding: 24px;
      text-align: justify;
    }
    > .day-img {
      position: absolute;

      height: 40%;

      bottom: 0;
      left: 0;
      right: 0;

      background-size: cover;
    }
  }
`;
