import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import SliderComponent from './Components/Slider/Slider';
import SeasonalCrop from './Components/SeasonalCropRec/SeasonalCrop';

function App() {
  return (
    <div>
      <Navbar />
      <SliderComponent/>
      <SeasonalCrop/>
    </div>
  );
}

export default App;
