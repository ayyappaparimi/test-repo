import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const APIcall = () => {
  const [dat, setData] = useState([]);
  //const[loading, setLoading]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default APIcall;