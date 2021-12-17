import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  color: #aaaaaa;

  & > div:hover {
    color: black;
    cursor: pointer;
  }
`;

export { Wrapper };
