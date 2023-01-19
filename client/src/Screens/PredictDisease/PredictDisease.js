import React, { useState } from 'react';
import './PredictDisease.css';
import Footer from './../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const PredictDisease = () => {
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

  return (
    <>
      <Navbar />
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
                  Your Plant is Suffering From
                  <span className="disease">{prediction}</span>
                </span>
              </div>
            ) : (
              <h2></h2>
            )}
          </div>
        </div>

        {img ? (
          <div className="description">
            <span className="Symptoms">
              <h2>Symptoms</h2>
              <p>
                1. Rajeev
                <br />
                2. Rajeev
                <br />
                3. Rajeev
                <br />
              </p>
            </span>
            <span className="Precautions">
              <h2>Precautions</h2>
              <p>
                1. Rajeev
                <br />
                2. Rajeev
                <br />
                3. Rajeev
                <br />
              </p>
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
