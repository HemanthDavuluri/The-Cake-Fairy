import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CarouselM from "./sections/Carousel/Carousel";
import ChocolateSection from "./sections/ChocolateSection/ChocolateSection";
import DesertSection from "./sections/DesertSection/DesertSection";
import Footer from "./sections/Footer/Footer";
import FruitSection from "./sections/FruitSection/FruitSection";
import Header from "./sections/Header/Header";
import SpecialCake from "./sections/SpecialCake/SpecialCake";
import SpecialCombos from "./sections/SpecialCombos/SpecialCombos";

function App() {
  const [dropdown, setDropDown] = useState(false);
  return (
    <div className="App">
      <Header dropdown={dropdown} dropdownset={setDropDown} />
      <CarouselM dropdown={dropdown} dropdownset={setDropDown} />
      <ChocolateSection />
      <FruitSection />
      <DesertSection />
      <SpecialCake />
      <SpecialCombos />
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
