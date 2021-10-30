import React, { useState } from "react";

import Header from "./component/Header";
import ResultCard from "./component/ResultCard";
import SearchInput from "./component/SearchInput";
import { AppWrapper } from "./style/App";

function App() {
  const [targetUser, setTargetUser] = useState(null);
  return (
    <AppWrapper>
      <Header />
      <SearchInput setTargetUser={setTargetUser} />
      <ResultCard targetUser={targetUser} setTargetUser={setTargetUser} />
    </AppWrapper>
  );
}

export default App;
