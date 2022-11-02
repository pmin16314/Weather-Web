import { useEffect, useState } from "react";

function GetLocation(searchTerm) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67ae22f399mshf30dea5a15dfc91p195a51jsn7e82034fddeb",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${searchTerm}`,
      options
    )
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  }, []);

  return { data, loading, error };
}
