import React from "react";

const Forecast = ({ data }) => {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = new Date().getDay();
  const forecastDayList = weekdays
    .slice(today, weekdays.length)
    .concat(weekdays.slice(0, today));

  console.log(forecastDayList);

  const forecastData = [
    data.list[9],
    data.list[14],
    data.list[19],
    data.list[24],
    data.list[29],
    data.list[34],
    data.list[39],
  ];

  console.log({ forecastData });
  return (
    <div className=' flex flex-col p-[1.5rem] overflow-hidden h-[715px]'>
      <h1 className='font-semibold text-[30px] text-miniText mb-4'>Forecast</h1>
      <div className='flex flex-col  overflow-auto '>
        {forecastData.map((foreaseOfADay, index) => (
          <div
            key={index}
            className={`flex flex-row justify-between items-center w-11/12 self-center h-[100px] ${
              index !== weekdays.length - 1 ? `border-b-2` : `b-0`
            }`}>
            <p className='font-medium text-[20px] text-miniText'>
              {forecastDayList[index]}
            </p>
            <div className='flex flex-row items-center space-x-2'>
              <img
                alt='weatherIcon'
                src={`icons/1_${foreaseOfADay.weather[0].icon}.png`}
                className='w-[50px] '
              />
              <p className='font-bold text-[20px] text-primary'>
                {foreaseOfADay.weather[0].main}
              </p>
            </div>
            <div className='text-[20px] text-miniText '>
              <span className='font-bold'>
                {Math.round(foreaseOfADay.main.temp_max - 273.15)}°C
              </span>
              {"/"}
              <span className='font-medium'>
                {Math.round(foreaseOfADay.main.temp_min - 273.15)}°C
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
