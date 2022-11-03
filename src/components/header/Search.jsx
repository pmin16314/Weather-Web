import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const onChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
      params: { minPopulation: "100000", namePrefix: `${search}` },
      headers: {
        "X-RapidAPI-Key": "67ae22f399mshf30dea5a15dfc91p195a51jsn7e82034fddeb",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    if (search !== "") {
      const timeOutId = setTimeout(() => {
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data.data);
            setData(response.data.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, 500);
      return () => clearTimeout(timeOutId);
    }
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
