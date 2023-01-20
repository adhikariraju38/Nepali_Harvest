import React from 'react';
import './PlantDoctor.css';
import IdentifyDiseases from '../../img/plantdoctor1.png';
import ReduceChemicalUse from '../../img/plantdoctor2.png';
import IncreaseCropYeild from '../../img/plantdoctor3.png';
import ImprovePlantHealth from '../../img/plantdoctor4.png';
import BoostProductivity from '../../img/plantdoctor5.png';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";


const PlantDoctor = () => {
  let navigate=useNavigate();
  const handleClick=()=>{
    navigate('/plantdoctor')

  }

  return (
    <div className="works" id="PlantDoctor">
      {/* left side */}
      <div className="w-left">
        <span>I am a</span>
        <span>Plant Doctor</span>
        <span>
          I can help farmers by quickly identifying and addressing plant
          diseases,
          <br /> reducing the use of unnecessary chemicals, increasing crop
          yield and <br />
          improving overall productivity by keeping their plants healthy.
        </span>
        <button onClick={handleClick} className="button w-button">Get CheckUp Your Plants</button>
        

      </div>

      {/* right side */} 

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={IdentifyDiseases} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ReduceChemicalUse} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={IncreaseCropYeild} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ImprovePlantHealth} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={BoostProductivity} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlantDoctor;
