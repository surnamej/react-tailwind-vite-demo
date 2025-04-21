// src/components/DataFetcher.jsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../api.js';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);  

  return (
    <div>
      <h1>Data:</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;
