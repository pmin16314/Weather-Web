import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SunRiseSet from "./SunRiseSet";
import Forecast from "./Forecast";

const WeatherR = ({ locationData }) => {
  const [cWeather, setCWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const [lat, lon] = locationData.value.split(" ");
  const apiKey = "c85a20f7e58627c074e296a351df9c99";

  useEffect(() => {
    console.log(locationData.value.split(" "));
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecaseResponse = await response[1].json();
        setCWeather({ city: locationData.label, ...weatherResponse });
        setForecast({ city: locationData.label, ...forecaseResponse });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [locationData]);

  console.log({ cWeather });
  console.log(forecast);

  return (
    <div className="flex flex-row pt-[5px] justify-between w-full">
      <div className=" basis-4/7  mr-[15px] w-[1026px] h-auto">
        <div className="mb-[15px]  bg-cardColor dark:bg-darkCardColor rounded-[10px]">
          {cWeather && <CurrentWeather data={cWeather} />}
        </div>
        {cWeather && <SunRiseSet data={cWeather} />}
      </div>
      <div className="basis-3/7 bg-cardColor dark:bg-darkCardColor rounded-[10px] w-[550px] h-auto">
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
};

export default WeatherR;
