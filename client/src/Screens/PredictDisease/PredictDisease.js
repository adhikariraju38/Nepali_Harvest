import React, { useState, useEffect } from 'react';
import Diseases from './Diseases.json'
import './PredictDisease.css';
import Footer from './../../Components/Footer/Footer';
import OtherNav from '../../Components/OtherNav/OtherNav';
import { useNavigate } from "react-router-dom";

const PredictDisease = () => {
  let navigate=useNavigate();
  const [prediction, setPrediction] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState(null);
  const [img, showImg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: formData,
    });
    const json = await response.json();
    setPrediction(json.prediction);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
    showImg(false);
  };

  const handleClick = () => {
    showImg(true);
  };

  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      navigate('/plantdoctor')
      // eslint-disable-next-line
    }
    else{
      navigate('/login')
    }
  },[])

  return (
    <>
      <OtherNav/>
      <div className="predictDisease">
        <div className="disease-content">
          <div className="pre-left">
            <span>Image Disease </span>
            <span>Prediction</span>
          </div>

          <div className="pre-right">
            <form onSubmit={handleSubmit}>
              <span>Upload an Image</span>
              <input
                type="file"
                name="image"
                className="user"
                accept="image/*"
                required
                onChange={handleFileChange}
              />
              <button
                onClick={handleClick}
                type="submit"
                className="button end"
              >
                Predict
              </button>
            </form>
            {img ? (
              <div className="result">
                {imageUrl && <img src={imageUrl} alt="Preview" />}
                <span className="diseaseResult">
                  <b>Prediction:</b> {prediction}
                  {/* <span className="disease"></span> */}
                </span>
              </div>
            ) : (
              <h2></h2>
            )}
          </div>
        </div>
        {img && Diseases.diseases[prediction]? (
          <div className="description">

              <span className="Symptoms">
              <h2>Cure</h2>
              <p>
              {Diseases.diseases[prediction].cure}
              </p>
            </span>
            <span className="Precautions">
              <h2>Solution</h2>
              <p>

          {Diseases.diseases[prediction].solution} </p>
        </span>
      </div>
    
        ) : (
          <h2></h2>
        )}
        <Footer />
      </div>
    </>
  );
};

export default PredictDisease;
