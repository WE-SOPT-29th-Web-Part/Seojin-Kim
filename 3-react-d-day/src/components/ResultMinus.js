import React, { useContext, useEffect, useState } from "react";

import { Input } from "../styles/Input";
import { ResultTextWrapper } from "../styles/ResultTextWrapper";
import Store from "../store";

const ResultMinus = () => {
  const context = useContext(Store);
  const [minusResult, setMinusResult] = useState("");
  const [minusDay, setMinusDay] = useState(0);

  const onInputChange = (day) => {
    if (day < 0) return;
    setMinusDay(day);
  };

  const templateMinusResult = (mDate) =>
    `${mDate.getFullYear()}년 ${mDate.getMonth() + 1}월 ${mDate.getDate()}일`;

  useEffect(() => {
    const resultDate = new Date(context.date.getTime());
    resultDate.setDate(context.date.getDate() - minusDay);
    setMinusResult(templateMinusResult(resultDate));
  }, [context, minusDay]);

  return (
    <ResultTextWrapper>
      <div>
        D-
        <Input
          type="number"
          value={minusDay}
          onChange={(e) => onInputChange(e.target.value)}
        />
        일은?
      </div>
      <div>{minusResult}</div>
    </ResultTextWrapper>
  );
};

export default ResultMinus;
