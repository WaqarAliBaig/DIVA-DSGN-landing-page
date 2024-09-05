import "./App.css";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Membership from "./components/Membership";
import Pricing from "./components/Pricing";
import Process from "./components/Process";

function App() {
  return (
    <div className="appContainer">
      <Home />
      <Membership />
      <Process />
      <About />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
