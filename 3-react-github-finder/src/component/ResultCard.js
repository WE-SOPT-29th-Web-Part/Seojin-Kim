import React from "react";

import {
  ResultCardProfileImg,
  ResultCardH1,
  ResultCardWrapper,
  ResultCardText,
  ResultCardAnchor,
  ResultCardBottom,
} from "../style/ResultCard";

const ResultCard = () => {
  return (
    <ResultCardWrapper>
      <ResultCardProfileImg src="https://github.com/SeojinSeojin.png" />
      <div>
        <ResultCardH1>김서진</ResultCardH1>
        <ResultCardText>Seojinseojin</ResultCardText>
      </div>
      <ResultCardText>z-index:9999;</ResultCardText>
      <ResultCardAnchor href="https://github.com/seojinseojin">
        visit github
      </ResultCardAnchor>
      <ResultCardBottom>
        <div>
          <div>Followers</div>
          <div>120</div>
        </div>
        <div>
          <div>Following</div>
          <div>125</div>
        </div>
        <div>
          <div>Repos</div>
          <div>37</div>
        </div>
      </ResultCardBottom>
    </ResultCardWrapper>
  );
};

export default ResultCard;
