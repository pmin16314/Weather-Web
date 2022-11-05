import React from "react";
import sunrise from "../../img/weather_icons/sunrise.svg";
import sunset from "../../img/weather_icons/sunset.svg";
import moment from "moment/moment";

const SunRiseSet = ({ data }) => {
  const sunriseTime = moment(data.sys.sunrise * 1000).format("h.mm A");
  const sunsetTime = moment(data.sys.sunset * 1000).format("h.mm A");

  return (
    <div className="  bg-cardColor rounded-[10px] h-[200px] p-[1.5rem] ">
      <p className="text-miniText font-medium text-[20px]"> Sunrise & Sunset</p>
      <div className="grid grid-cols-2 mt-[20px]">
        {" "}
        <div className="flex flex-row space-x-3 justify-self-start">
          <div className="h-[80px] w-[80px] rounded-[10px] bg-primary">
            <img alt="sunrise" src={sunrise} className="w-[250px] p-3" />{" "}
          </div>
          <div>
            {" "}
            <p className="font-bold text-[20px] text-secondary"> Sunrise</p>
            <p className="font-medium text-[50px] text-primary leading-none"> {sunriseTime}</p>
          </div>
        </div>
        <div className="flex flex-row space-x-3 justify-self-start">
          <div className="h-[80px] w-[80px] rounded-[10px] bg-primary">
            <img alt="sunset" src={sunset} className="w-[250px] p-3" />{" "}
          </div>
          <div>
            {" "}
            <p className="font-bold text-[20px] text-secondary"> Sunset</p>
            <p className="font-medium text-[50px] text-primary leading-none"> {sunsetTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunRiseSet;
