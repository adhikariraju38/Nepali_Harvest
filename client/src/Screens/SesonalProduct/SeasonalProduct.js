import React, { useState } from 'react';
import './SeasonalProduct.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from './../../Components/Navbar/Navbar';

function SeasonalProduct() {
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict_json', {
        method: 'POST',
        body: JSON.stringify({
          N,
          P,
          K,
          temperature,
          humidity,
          ph,
          rainfall,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Navbar/>
      {/* <OtherNav />
      <NewNav/> */}
      <div className="predict">
        <div className="seasonalPrediction">
          <div className="ses-left">
            <span>Make a </span>
            <span>prediction</span>
          </div>

          <div className="ses-right">
            <form onSubmit={handleSubmit}>
              <span>Fill Appropriate Data to get better result</span>
              <label className="first">
                Average Ratio of Nitrogen in the Soil : 50.55
              </label>
              <input
                type="text"
                className="user"
                placeholder="N:(Ratio of nitrogen content in the soil)"
                value={N}
                onChange={(e) => setN(e.target.value)}
              />

              <label>Average Ratio of Phosphorous in the Soil : 53.36</label>
              <input
                type="text"
                className="user"
                placeholder="P:(Ratio of phosphorous content in the soil)"
                value={P}
                onChange={(e) => setP(e.target.value)}
              />

              <label>Average Ratio of Potassium in the Soil : 48.15</label>
              <input
                type="text"
                className="user"
                placeholder="K:(ration of Potassium content in soil)"
                value={K}
                onChange={(e) => setK(e.target.value)}
              />

              <label>Average Tempature in Celsius : 25.62</label>
              <input
                type="text"
                className="user"
                placeholder="Temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />

              <label>Average Relative Humidity in % : 71.48</label>
              <input
                type="text"
                className="user"
                placeholder="Humidity"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
              />

              <label>Average PH Value of the soil : 6.47</label>
              <input
                type="text"
                className="user"
                placeholder="Ph"
                value={ph}
                onChange={(e) => setPh(e.target.value)}
              />

              <label>Average Rainfall in mm: 103.46</label>
              <input
                type="text"
                className="user"
                placeholder="Rainfall"
                value={rainfall}
                onChange={(e) => setRainfall(e.target.value)}
              />

              <input type="submit" value="Submit" className="button last" />

              {/* Plant Predicted Result */}
              {prediction && (
                <span className="pre-result">
                  Most Suitable Plant: <span className="plant">{prediction}</span>
                </span>
              )}
              {/* <span className="pre-result">
                Most Suitable Plant: <span className="plant">Papaya</span>
              </span> */}
              {/* {prediction && <h2>Prediction: {prediction}</h2>} */}
            </form>
          </div>
        </div>


        {/* Description For Predicted Result */}
        {prediction && <span className="plantDescription">
          <h2 className="p-desc">Description</h2>
          <p>Papaya is good for health</p>
        </span>}

        {/* <span className="plantDescription">
          <h2 className="p-desc">Description</h2>
          <p>Papaya is good for health</p>
        </span> */}
        <Footer />
      </div>
    </>
  );
}

export default SeasonalProduct;
