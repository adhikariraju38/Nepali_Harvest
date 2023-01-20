import React from "react";
import NewNav from "./Components/Navbar/NewNav";
import Chatbox from "./Components/Chatbox/Chatbox";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SeasonalCrop from "./Components/SeasonalCropRec/SeasonalCrop";
import PlantDoctor from "./Components/PlantDoctor/PlantDoctor";
import SliderComponent from "./Components/Slider/Slider";
import TopCrops from "./Components/TopCrops/TopCrops";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NewNav />
      <SliderComponent />
      <SeasonalCrop />
      <PlantDoctor />
      <TopCrops/>
      <Contact/>
      <Footer />
      
      <Chatbox />
    </div>
  );
}

export default App;
