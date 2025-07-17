import React from "react";
import useFetch from "./UseFetch";

const FetchYogaData = () => {
  const [yogaData] = useFetch("https://api.npoint.io/4459a9a10e43812e1152");

  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Yoga Benefits</h1>
        {yogaData &&
          yogaData.map((e, index) => (
            <li key={index} className="list_data">
              <h3>{e.name}</h3>
              <p>
                Benefits: <strong>{e.benefits}</strong>
              </p>
              <p>
                Duration: <strong>{e.time_duration}</strong>
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchYogaData;
