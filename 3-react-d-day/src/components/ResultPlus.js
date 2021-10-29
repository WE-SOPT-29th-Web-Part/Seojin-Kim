import React, { useContext, useEffect, useState } from "react";

import { Input } from "../styles/Input";
import { ResultTextWrapper } from "../styles/ResultTextWrapper";
import Store from "../store";

const ResultPlus = () => {
  const context = useContext(Store);
  const [plusResult, setPlusResult] = useState("");
  const [plusDay, setPlusDay] = useState(0);

  const onInputChange = (day) => {
    if (day < 0) return;
    setPlusDay(day);
  };

  const templateMinusResult = (mDate) =>
    `${mDate.getFullYear()}년 ${mDate.getMonth() + 1}월 ${mDate.getDate()}일`;

  useEffect(() => {
    const resultDate = new Date(context.date.getTime());
    resultDate.setDate(context.date.getDate() + plusDay);
    setPlusResult(templateMinusResult(resultDate));
  }, [context, plusDay]);

  return (
    <ResultTextWrapper>
      <div>
        <Input
          type="number"
          value={plusDay}
          onChange={(e) => onInputChange(Number(e.target.value))}
        />
        일째 되는 날은?
      </div>
      <div>{plusResult}</div>
    </ResultTextWrapper>
  );
};

export default ResultPlus;
