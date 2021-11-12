import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: hidden;
`;

const StyledContainer = styled.div`
  width: 80%;
  min-width: 300px;
  overflow-x: hidden;

  & input,
  textarea {
    border: none;
    padding: 1rem;
    font-size: 1.2rem;

    &:focus {
      border: none;
      outline: none;
    }
  }

  & > input,
  textarea {
    width: 100%;
  }

  & textarea {
    height: auto;
    min-height: 70vh;
  }
`;

export { StyledContainer, StyledWrapper };
