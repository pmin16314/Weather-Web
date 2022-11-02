import React, { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "67ae22f399mshf30dea5a15dfc91p195a51jsn7e82034fddeb",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };
    fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${search}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div>
      <div>
        <input
          type='text'
          value={search}
          placeholder='Enter the city...'
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
