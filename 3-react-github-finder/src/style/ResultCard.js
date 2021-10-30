import styled from "styled-components";

const ResultCardWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: #24292e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  gap: 12px;
  width: 320px;
  text-align: center;
`;

const ResultCardProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

const ResultCardH1 = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`;

const ResultCardText = styled.div`
  font-size: 1.2rem;
  padding: 12px 0;
`;

const ResultCardAnchor = styled.a`
  font-size: 1.2rem;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid yellow;
  color: yellow;
  text-decoration: none;
  &:hover {
    background-color: yellow;
    color: black;
  }
`;

const ResultCardBottom = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 12px;
  & > div {
    padding: 12px;
    background-color: black;
  }
  & :first-child {
    border-bottom-left-radius: 12px;
  }
  & :last-child {
    border-bottom-right-radius: 12px;
  }
`;

const ResultCardCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 12px;
  border: none;
  background-color: black;
  color: white;
`;

export {
  ResultCardWrapper,
  ResultCardProfileImg,
  ResultCardH1,
  ResultCardText,
  ResultCardAnchor,
  ResultCardBottom,
  ResultCardCloseButton,
};
