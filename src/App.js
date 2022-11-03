import React, { useState } from "react";
//import ApiTest from "./components/ApiTest";
import Header from "./components/header/Header";
import WeatherR from "./components/weather_results/WeatherR";
import styles from "./styles";

const App = () => {
  const [locationData, setLocationData] = useState(null);

  return (
    <div
      className={`w-full ${styles.flexCenter} ${styles.paddingX} flex-col font-poppins`}>
      <div className={`${styles.boxWidth}`}>
        <Header setLocationData={setLocationData} />
      </div>
      <div className={`${styles.boxWidth}`}>
        {locationData && <WeatherR locationData={locationData} />}
      </div>
    </div>
  );
};

export default App;
