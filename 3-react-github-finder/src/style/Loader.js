import styled from 'styled-components';

const Loader = styled.div`
  background-color: white;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 3em;
  animation: loader 1s infinite ease-in-out;
  @keyframes loader {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export { Loader };
