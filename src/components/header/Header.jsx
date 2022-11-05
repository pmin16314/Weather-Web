import React from "react";
import Time from "./Time";
import SearchPagination from "./SearchPagination";
//import Search from "./Search";
import logo from "../../img/logos/logo.svg";

const Header = ({ setLocationData, setDarkTheme, darkTheme }) => {
  const handleOnSearchChange = (searchdata) => {
    setLocationData(searchdata);
  };

  return (
    <div className="flex flex-row justify-between mt-[20px] mb-[10px] pb-[10px] border-b-2">
      <div>
        <img className="w-[250px] py-4 " alt="logo" src={logo} />
      </div>

      <div>
        <div className="flex flex-row justify-end mb-3 space-x-3">
          <Time />
          <button
            type="button"
            onClick={() => setDarkTheme(!darkTheme)}
            className="w-[60px] p-[5px]">
            {darkTheme ? (
              <img alt="light" src={`icons/light.png`} className="w-[50px] " />
            ) : (
              <img alt="dark" src={`icons/dark.png`} className="w-[50px] " />
            )}
          </button>
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
