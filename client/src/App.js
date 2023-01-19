import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Chatbox from "./Components/Chatbox/Chatbox";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SeasonalCrop from "./Components/SeasonalCropRec/SeasonalCrop";
import PlantDoctor from "./Components/PlantDoctor/PlantDoctor";
import SliderComponent from "./Components/Slider/Slider";
import TopCrops from "./Components/TopCrops/TopCrops";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderComponent />
      <SeasonalCrop />
      <PlantDoctor />
      <TopCrops/>
      <Footer />
      <Chatbox />
    </div>
  );
}

export default App;
