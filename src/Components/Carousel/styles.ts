import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-green-s);
  padding: 40px 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  border-bottom: 2px solid var(--color-yellow-s);

  .carrosel {
    max-width: 1440px;
    width: 100%;

    max-height: 768px;
    height: 100%;

    > div img {
      max-width: 1440px;
      width: 100%;

      max-height: 768px;
      height: 100%;
    }
  }
`;
