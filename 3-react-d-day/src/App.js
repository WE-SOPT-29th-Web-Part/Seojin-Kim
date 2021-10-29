import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";
import { AppWrapper } from "./styles/AppWrapper";

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Header />
        <DateInput />
        <CenterText />
        <Result />
        <Footer />
      </AppWrapper>
    </div>
  );
}

export default App;
