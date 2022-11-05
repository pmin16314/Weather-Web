import React from "react";
import moment from "moment/moment";
import { useEffect, useState } from "react";

const Time = () => {
  const [date1, setDate1] = useState(moment().format("h.mm A"));

  useEffect(() => {
    const interval = setInterval(() => setDate1(moment().format("h.mm A")), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const date2 = moment().format("dddd, Do MMMM YYYY");

  return (
    <div className="text-primary  dark:text-darkSecondary flex flex-col text-right ">
      <div className="m-0 leading-none">
        <span className="text-[35px] font-semibold">{date1}</span>
      </div>
      <div className="text-[20px] text-miniText dark:text-darkMiniText font-medium">{date2}</div>
    </div>
  );
};

export default Time;
