import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 80%;
  min-width: 300px;
  overflow-x: hidden;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  position: relative;
  gap: 24px;
  margin: 0 calc(50% - 144px);
  padding: 24px 0;
  text-align: center;
`;

interface ILink {
  focused: boolean;
}
const LinkWrapper = styled.div<ILink>`
  & > a {
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    color: ${(props) => (props.focused ? 'rgb(12, 166, 120)' : 'black')};
  }
`;

interface IGreenLine {
  isPostSelected: boolean;
}

const GreenLine = styled.div<IGreenLine>`
  width: 132px;
  height: 2px;
  background-color: rgb(12, 166, 120);
  position: absolute;
  top: 60px;
  animation: ${(props) => (props.isPostSelected ? 'moveLeft' : 'moveRight')}
    0.6s forwards;

  @keyframes moveLeft {
    from {
      right: 0;
    }
    to {
      right: 156px;
    }
  }

  @keyframes moveRight {
    from {
      left: 0;
    }
    to {
      left: 156px;
    }
  }
`;

export {
  StyledWrapper,
  StyledContainer,
  LinkContainer,
  LinkWrapper,
  GreenLine,
};
