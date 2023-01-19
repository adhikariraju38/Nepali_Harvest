import React from "react";
import SeasonalProduct from "./Screens/SesonalProduct/SeasonalProduct";
import PredictDisease from "./Screens/PredictDisease/PredictDisease";

import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import App from "./App";
import SignInForm from "./Screens/LoginSignUp/SignInForm";


function MainApp() {
  // let navigate=useNavigate();
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/seasonalproduct" element={<SeasonalProduct />} />
          <Route path="/plantdoctor" element={<PredictDisease />} />
          <Route path="/login" element={<SignInForm/>} />
        </Routes>
      </Router>
    </>
  );
}

export default MainApp;
