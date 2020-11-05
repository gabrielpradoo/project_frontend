import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 340px;

  position: relative;

  display: flex;
  justify-content: space-between;

  padding: 32px;

  background: var(--color-green);

  > .find-us,
  .contact-us {
    height: 100%;
    width: 45%;

    display: flex;
    flex-direction: column;

    > h3 {
      color: var(--color-yellow-s);
      font-size: 1.7rem;
      margin-bottom: 18px;
    }
  }

  > .find-us {
    align-items: flex-start;

    > .find-us-content {
      height: 23%;
      display: flex;
      flex-direction: column;

      > p {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 4px;
        color: var(--color-white);
      }
    }

    > .on-map {
      margin-top: 16px;

      text-decoration: none;
      color: var(--color-yellow);
      font-size: 1.3rem;
      font-weight: 600;
      transition: color 0.5s;

      :hover {
        color: var(--color-yellow-s);
      }
    }
  }

  > .contact-us {
    align-items: flex-end;

    > .contact-content {
      height: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > p {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 4px;
        color: var(--color-white);
      }

      > .email-contact {
        margin-top: 8px;

        text-decoration: none;
        color: var(--color-yellow);
        font-size: 1.3rem;
        font-weight: 600;
        transition: color 0.5s;

        :hover {
          color: var(--color-yellow-s);
        }
      }
    }

    .social {
      margin-top: 16px;

      display: flex;
      flex-direction: column;

      > span {
        color: var(--color-yellow-s);
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 8px;
      }

      > .social-content {
        display: flex;
        justify-content: space-around;
      }
    }
  }

  > .dev-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px 0;

    background: var(--color-green-s);

    display: flex;
    justify-content: space-around;

    > p,
    a {
      color: var(--color-white);
    }
  }
`;
