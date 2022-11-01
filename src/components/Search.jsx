import React, { useState } from "react";

const Search = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getResults = async () => {
    setIsLoading = true;

    const response = await fetch(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=col",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "67ae22f399mshf30dea5a15dfc91p195a51jsn7e82034fddeb",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return (
    <div>
      {" "}
      <button onClick={getResults}>
        <span>Give ne quote!</span>
      </button>
    </div>
  );
};

export default Search;
