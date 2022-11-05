import React from "react";
import Time from "./Time";
import SearchPagination from "./SearchPagination";
//import Search from "./Search";
import logo from "../../img/logos/logo.svg";

const Header = ({ setLocationData }) => {
  const handleOnSearchChange = (searchdata) => {
    setLocationData(searchdata);
  };

  return (
    <div className="flex flex-row justify-between mt-[20px] mb-[10px] pb-[10px] border-b-2">
      <div>
        <img className="w-[250px] py-4 " alt="logo" src={logo} />
      </div>

      <div>
        <div>
          <Time />
        </div>
        <div className="shrink w-[500px] mb-[5px]">
          <SearchPagination onSearchChange={handleOnSearchChange} />
          {/* <Search /> */}
        </div>
      </div>
    </div>
  );
};
export default Header;
