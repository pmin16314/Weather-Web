import React, { useState } from "react";
//import ApiTest from "./components/ApiTest";
import Header from "./components/header/Header";
import WeatherR from "./components/weather_results/WeatherR";
import styles from "./styles";

const App = () => {
  const [locationData, setLocationData] = useState(null);

  return (
    <div
      className={`w-full h-[100vh] max-h-[1080px] grid grid-cols-1 justify-items-center content-between sm:px-16 px-6 font-poppins`}>
      <div className={`xl:max-w-[1600px] w-full`}>
        <Header setLocationData={setLocationData} />
      </div>
      <div className={`xl:max-w-[1600px] w-full`}>
        {locationData && <WeatherR locationData={locationData} />}
      </div>
      <div className="mt-6 mb-6 text-miniText font-medium">
        Copyright Ⓒ 2022 The weather Report. All Rights Reserved.
      </div>
    </div>
  );
};

export default App;
