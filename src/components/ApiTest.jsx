import React from "react";

const ApiTest = () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c85a20f7e58627c074e296a351df9c99"
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div>Test</div>;
};

export default ApiTest;
