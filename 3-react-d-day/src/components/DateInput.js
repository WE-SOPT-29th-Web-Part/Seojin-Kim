import React from "react";

import { DateInputWrapper } from "../styles/DateInputWrapper";
import { Button } from "../styles/Button";
import { Input } from "../styles/Input";

const DateInput = () => {
  return (
    <DateInputWrapper>
      <Button>오늘</Button>
      <div>
        <Input type="number" />년 <Input type="number" />월{" "}
        <Input type="number" />
        일을 기준으로
      </div>
    </DateInputWrapper>
  );
};

export default DateInput;
