import React from "react";
import Time from "./Time";
import Search from "./Search";

const Header = () => {
  return (
    <div className='flex flex-row justify-between mt-[20px] mb-[10px] border-b-2'>
      <div>
        <Time />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};
export default Header;
