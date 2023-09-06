import React, { useState, useEffect } from 'react';
import TableComponent from './tablecomponent';

const PageOne = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: 'id', column: 'id' },
    { field: 'name', column: 'nama' },
    { field: 'email', column: 'email' },
    { field: 'phone', column: 'phone' },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch('http://DESKTOP-75HF6R4:5000/users');
      const dataFromApi = await response.json();
      setData(dataFromApi.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableComponent row={data} column={columns} />
      )}
    </div>
  );
};

export default PageOne;