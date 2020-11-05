import styled from 'styled-components';

export const Container = styled.div`
  border-top: 2px solid var(--color-yellow-s);

  > .infos-title {
    display: flex;
    justify-content: center;
    align-items: center;

    > .infos-text {
      padding-left: 8px;

      height: 90%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
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

    > img {
      max-width: 1400px;
      width: 100%;
      height: auto;
    }
  }

  > .infos-title-1 {
    margin: 0 0 25px 0;

    border-bottom: 2px solid var(--color-yellow-s);

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    > .infos-text {
      padding-left: 8px;

      width: 50%;

      height: 90%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
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

    > img {
      /* max-width: 1400px; */
      width: 49%;
    }
  }
`;
