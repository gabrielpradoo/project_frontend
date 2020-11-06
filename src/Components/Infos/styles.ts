import styled from 'styled-components';
import riverImg from '../../assets/por_do_sol.webp';
import roteiro_compImg from '../../assets/roteiro_completo.webp';

export const Container = styled.div`
  border-top: 2px solid var(--color-yellow-s);

  > .infos-title {
    display: flex;
    justify-content: center;
    align-items: center;

    > .infos-text {
      padding-left: 8px;
      width: 50%;
      height: 600px;

      text-align: center;
      padding: auto;

      display: flex;
      flex-direction: column;
      /*justify-content: space-around;*/
      align-items: center;

      .infos-text-content {
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2 {
          color: var(--color-yellow-s);
          font-size: 2.5rem;
          font-weight: 300;
          text-transform: uppercase;
          text-align: center;
        }

        > p {
          color: var(--color-green-s);
          font-size: 1.3rem;
          font-weight: 400;
          width: 60%;
          text-align: center;

          margin-bottom: 12px;
        }
      }
    }

    > .infos-img {
      background: url(${riverImg}) no-repeat;
      background-size: cover;
      width: 50%;
      height: 600px;
    }
  }

  > .infos-title-1 {
    margin: 0 0 25px 0;

    border-bottom: 2px solid var(--color-yellow-s);

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    > .infos-text {
      padding-left: 8px;

      width: 50%;
      height: 600px;

      display: flex;
      flex-direction: column;
      /*justify-content: space-around;*/
      align-items: center;

      .infos-text-content {
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        > h2 {
          color: var(--color-yellow-s);
          font-size: 2.5rem;
          font-weight: 300;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 8px;
        }

        > p {
          color: var(--color-green-s);
          font-size: 1.3rem;
          font-weight: 400;
          width: 60%;
          text-align: center;

          margin-bottom: 12px;
        }
      }
    }

    > .infos-img-1 {
      background: url(${roteiro_compImg}) no-repeat;
      background-size: cover;
      width: 50%;
      height: 600px;
    }
  }
`;
