import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={getData}>get data</button>
      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </>
  );
};

export default App;
