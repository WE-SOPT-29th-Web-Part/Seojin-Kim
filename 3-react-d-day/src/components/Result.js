import React from "react";

import ResultMinus from "./ResultMinus";
import ResultPlus from "./ResultPlus";
import { ResultWrapper } from "../styles/ResultWrapper";

const Result = () => {
  return (
    <ResultWrapper>
      <ResultPlus />
      <ResultMinus />
    </ResultWrapper>
  );
};

export default Result;
