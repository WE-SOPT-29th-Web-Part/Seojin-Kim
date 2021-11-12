import styled from 'styled-components';

const GreenButton = styled.button`
  background-color: rgb(12, 166, 120);
  border-radius: 4px;
  padding: 12px 16px;
  color: white;
  border: none;
  font-size: 1.1rem;
  & > a {
    text-decoration: none;
    color: white;
  }
`;

export { GreenButton };
