import React from "react";

import { Input } from "../styles/Input";
import { ResultTextWrapper } from "../styles/ResultTextWrapper";

const ResultMinus = () => {
  return (
    <ResultTextWrapper>
      <div>
        D-
        <Input />
        일은?
      </div>
      <div></div>
    </ResultTextWrapper>
  );
};

export default ResultMinus;
