import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import SliderComponent from './Components/Slider/Slider';
import SeasonalCrop from './Components/SeasonalCropRec/SeasonalCrop';
import Footer from './Components/Footer/Footer';
import PlantDoctor from './Components/PlantDoctor/PlantDoctor';
import TopCrops from './Components/TopCrops/TopCrops';

function App() {
  return (
    <div>
      <Navbar />
      <SliderComponent/>
      <SeasonalCrop/>
      <PlantDoctor/>
      <TopCrops/>
      <Footer/>
    </div>
  );
}

export default App;
