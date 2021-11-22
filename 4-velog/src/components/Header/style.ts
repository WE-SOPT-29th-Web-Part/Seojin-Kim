import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.div`
  padding: 0.5rem 1.2rem 0.4rem 1.2rem;
  border-radius: 1.2rem;
  border: 1px solid black;
  font-weight: 700;
  & > a {
    text-decoration: none;
    color: black;
  }
`;

export { Wrapper, Button };
