import React from "react";

import { Input } from "../styles/Input";
import { ResultTextWrapper } from "../styles/ResultTextWrapper";

const ResultPlus = () => {
  return (
    <ResultTextWrapper>
      <div>
        <Input />
        일째 되는 날은?
      </div>
      <div></div>
    </ResultTextWrapper>
  );
};

export default ResultPlus;
