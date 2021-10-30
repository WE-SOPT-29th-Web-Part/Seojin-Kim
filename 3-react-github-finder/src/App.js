import React from "react";

import Header from "./component/Header";
import ResultCard from "./component/ResultCard";
import SearchInput from "./component/SearchInput";
import { AppWrapper } from "./style/App";

function App() {
  return (
    <AppWrapper>
      <Header />
      <SearchInput />
      <ResultCard />
    </AppWrapper>
  );
}

export default App;
