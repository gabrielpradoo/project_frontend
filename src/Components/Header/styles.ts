import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 90px;
  background: var(--color-green-s);

  font-family: Quicksand, sans-serif;

  border-bottom: 2px solid var(--color-yellow-s);

  > ul {
    width: 100%;
    height: inherit;

    display: flex;
    justify-content: space-around;
    align-items: center;

    > li {
      width: 25%;
      height: inherit;
      list-style: none;

      display: flex;
      justify-content: center;
      align-items: center;

      > a {
        position: relative;

        text-decoration: none;
        color: var(--color-white);
        font-size: 20px;

        font-weight: 600;

        transition: color 0.5s;

        :hover {
          color: var(--color-yellow-s);
        }

        > img {
          width: inherit;
          height: 80px;
        }
      }
    }
  }
`;
