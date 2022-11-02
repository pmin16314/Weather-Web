import React, { useState } from "react";
import GetLocation from "./GetLocation";

const Search = () => {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
    const { data, loading, error } = getLocation(search);
    console.log(data);
  };

  return (
    <div>
      <div>
        <input type='text' value={search} onChange={onChange} />
      </div>
    </div>
  );
};

export default Search;
