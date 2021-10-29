import React, { useContext } from "react";

import { DateInputWrapper } from "../styles/DateInputWrapper";
import { Button } from "../styles/Button";
import { Input } from "../styles/Input";
import Store from "../store";

const DateInput = () => {
  const { date, contextDispatch } = useContext(Store);

  return (
    <DateInputWrapper>
      <Button onClick={() => contextDispatch({ type: "TODAY" })}>오늘</Button>
      <div>
        <Input
          type="number"
          value={date.getFullYear()}
          onChange={(e) =>
            contextDispatch({ type: "YEAR", value: e.target.value })
          }
        />
        년{" "}
        <Input
          type="number"
          value={date.getMonth() + 1}
          onChange={(e) =>
            contextDispatch({ type: "MONTH", value: e.target.value })
          }
        />
        월{" "}
        <Input
          type="number"
          value={date.getDate()}
          onChange={(e) =>
            contextDispatch({ type: "DATE", value: e.target.value })
          }
        />
        일을 기준으로
      </div>
    </DateInputWrapper>
  );
};

export default DateInput;
