import React from "react";
import useFetch from "./UseFetch";
import './FetchData.css'

const FetchData = () => {
  const [data] = useFetch("https://api.npoint.io/9045c260b1565daa9e15");
  
  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
        {data && data.map((e, index) => (
          <li key={index} className="list_data">
            <h3>{e.name}</h3>
            <p>
              Importance: <strong> {e.importance}</strong>
            </p>
            <p>
              Benefits: <strong> {e.benefits}</strong>
            </p>
            <p>
              Time: <strong> {e.best_time_to_intake}</strong>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
