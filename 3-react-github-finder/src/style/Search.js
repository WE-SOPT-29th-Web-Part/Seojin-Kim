import styled from 'styled-components';

const HistoryWrapper = styled.div`
  transition: all 0.5s;
  position: absolute;
  top: 62px;
  width: 100%;
  padding: 12px;
  background-color: grey;
  box-sizing: border-box;
  border-radius: 12px;
  z-index: 999;

  &.mode-visible {
    margin-top: 0;
    opacity: 1;
    transform: rotateY(0);
  }

  &.mode-invisible {
    margin-top: -20px;
    opacity: 0;
    transform: rotateY(-0.2turn);
  }
`;

const HistoryItem = styled.div`
  transition: all 0.5s;
  color: white;
  text-align: center;
  padding: 8px;
  display: flex;
  justify-content: space-between;

  &.mode-visible {
    transform: scale(1);
    opacity: 1;
    margin-top: 0;
  }

  &.mode-invisible {
    transform: scale(0);
    opacity: 0;
    margin-top: -20;
  }

  &:hover {
    cursor: pointer;
  }
`;

const HistoryDeleteButton = styled.div`
  cursor: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export { HistoryWrapper, HistoryItem, HistoryDeleteButton };
