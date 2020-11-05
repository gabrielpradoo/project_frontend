import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 900px;
  height: 100%;

  padding: 24px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--color-green);

  > h2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--color-yellow-s);
    margin-bottom: 12px;
  }

  > iframe {
    display: inline-block;

    max-width: 1440px;
    width: 100%;
    height: 700px;
  }
`;
