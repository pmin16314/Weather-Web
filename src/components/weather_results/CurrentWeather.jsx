import React from "react";
import wind from "../../img/weather_icons/icons_wind.svg";
import humidity from "../../img/weather_icons/icons_humidity.svg";
import cloudness from "../../img/weather_icons/icons_cloudness.svg";
import pressure from "../../img/weather_icons/icons_pressure.svg";
import visibility from "../../img/weather_icons/icons_visibility.svg";

const CurrentWeather = ({ data }) => {
  return (
    <div className='flex flex-col p-[1.5rem] h-[500px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col '>
          <p className='font-bold text-secondary text-[50px] leading-none'>
            {data.city}
          </p>
          <p className='font-medium text-miniText text-[20px] leading-none mt-[7px]'>
            <span className='font-bold'>Lat :</span> {data.coord.lat}{" "}
            <span className='font-bold'>Lon :</span>
            {data.coord.lon}
          </p>
          <p className='font-medium text-primary text-[180px] leading-none pt-6'>
            {" "}
            {Math.round(data.main.temp - 273.15)}°C{" "}
          </p>
          <p className='font-medium text-miniText text-[25px] leading-none '>
            {" "}
            Feels like : {Math.round(data.main.feels_like - 273.15)}°C
          </p>
        </div>
        <div className='flex flex-col items-center pr-7'>
          <img
            alt='weatherIcon'
            src={`icons/1_${data.weather[0].icon}.png`}
            className='w-[250px] '
          />
          <div className='font-bold text-[40px] text-primary text-center'>
            {data.weather[0].main}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5 mt-8 gap-4'>
        {/* wind speed */}
        <div className='p-2 hover:bg-cardDark rounded-[10px]'>
          <div className='text-miniText text-[15px] flex flex-row space-x-4'>
            Wind <img src={wind} alt='wind' className='w-[20px] ml-[10px] ' />
          </div>
          <div className='text-primary text-[18px] font-bold tracking-tighter'>
            {data.wind.speed} km/h
          </div>
        </div>
        {/* humidity*/}
        <div className='p-2 hover:bg-cardDark rounded-[10px]'>
          <div className='text-miniText text-[15px] flex flex-row space-x-4'>
            Humidity{" "}
            <img src={humidity} alt='wind' className='w-[20px] ml-[10px] ' />
          </div>
          <div className='text-primary text-[18px] font-bold tracking-tighter'>
            {data.main.humidity} %
          </div>
        </div>

        {/* cloudness*/}
        <div className='p-2 hover:bg-cardDark rounded-[10px] '>
          <div className='text-miniText text-[15px] flex flex-row space-x-4'>
            Cloudness{" "}
            <img src={cloudness} alt='wind' className='w-[20px] ml-[10px] ' />
          </div>
          <div className='text-primary text-[18px] font-bold tracking-tighter'>
            {data.clouds.all} %
          </div>
        </div>

        {/* Pressure*/}
        <div className='p-2 hover:bg-cardDark rounded-[10px]'>
          <div className='text-miniText text-[15px] flex flex-row space-x-4'>
            Pressure{" "}
            <img src={pressure} alt='wind' className='w-[20px] ml-[10px] ' />
          </div>
          <div className='text-primary text-[18px] font-bold tracking-tighter'>
            {data.main.pressure} hPa
          </div>
        </div>

        {/* visibility*/}
        <div className='p-2 hover:bg-cardDark rounded-[10px]'>
          <div className='text-miniText text-[15px] flex flex-row space-x-4'>
            Visibility{" "}
            <img src={visibility} alt='wind' className='w-[20px] ml-[10px] ' />
          </div>
          <div className='text-primary text-[18px] font-bold tracking-tighter'>
            {data.visibility / 1000} km
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
