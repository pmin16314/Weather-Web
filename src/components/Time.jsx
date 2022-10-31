import React, { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let [day, dte, month, year] = [
    weekday[date.getDay()],
    date.getDate(),
    months[date.getMonth() - 1],
    date.getFullYear(),
  ];
  let ampm = hours >= 12 ? "PM" : "PM";
  hours = hours % 12;
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");

  return (
    <div className='text-primary flex flex-col'>
      <div className='m-0 leading-none'>
        <span className='text-[96px] font-medium '>
          {hours}.{minutes}
        </span>
        {"  "}
        <span className='text-[40px] font-medium'>{ampm}</span>
      </div>
      <div className='text-[26px] mb-3 text-miniText font-medium'>
        {day}
        {", "}
        {dte} {month} {year}
      </div>
    </div>
  );
};

export default Time;
