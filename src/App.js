import React, { useState } from "react";
import Header from "./components/header/Header";
import WeatherR from "./components/weather_results/WeatherR";

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div
        className={`grid grid-cols-1 justify-items-center content-between h-[100vh] max-h-[1080px] sm:px-16 px-6 font-poppins dark:bg-darkBg bg-Bg`}>
        <div className={`xl:max-w-[1600px] w-full`}>
          <Header
            setLocationData={setLocationData}
            setDarkTheme={setDarkTheme}
            darkTheme={darkTheme}
          />
        </div>
        <div className={`xl:max-w-[1600px] w-full`}>
          {locationData && <WeatherR locationData={locationData} />}
        </div>
        <div className="mt-6 mb-6 text-miniText font-medium">
          Copyright Ⓒ 2022 The weather Report. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default App;
