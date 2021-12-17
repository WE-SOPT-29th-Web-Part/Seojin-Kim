import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 52px);
  display: flex;
  justify-content: center;
  background-color: white;
  animation: slideUp 1s forwards;
  padding-top: 52px;
  @keyframes slideUp {
    from {
      top: 100vh;
    }
    to {
      top: 0;
    }
  }
`;

const StyledContainer = styled.div`
  width: 80%;
  min-width: 300px;
  overflow-x: hidden;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const ImageInput = styled.div`
  width: 350px;
  height: 200px;
  background-color: #e8ecef;

  & > div {
    text-align: center;
  }

  & > input {
    display: none;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { StyledWrapper, StyledContainer, GridWrapper, Title, ImageInput };
