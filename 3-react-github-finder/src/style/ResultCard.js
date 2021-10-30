import styled from "styled-components";

const ResultCardWrapper = styled.div`
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
  display: flex;
  width: 100%;
  gap: 12px;
  justify-content: space-between;
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

export {
  ResultCardWrapper,
  ResultCardProfileImg,
  ResultCardH1,
  ResultCardText,
  ResultCardAnchor,
  ResultCardBottom,
};
