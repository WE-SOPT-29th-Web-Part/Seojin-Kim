import React, { useReducer } from "react";

import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import Store from "./store";
import dayReducer from "./reducer";
import { AppWrapper } from "./styles/AppWrapper";

function App() {
  const [state, contextDispatch] = useReducer(dayReducer, { date: new Date() });
  return (
    <div className="App">
      <Store.Provider value={{ date: state.date, contextDispatch }}>
        <AppWrapper>
          <Header />
          <DateInput />
          <CenterText />
          <Result />
          <Footer />
        </AppWrapper>
      </Store.Provider>
    </div>
  );
}

export default App;
