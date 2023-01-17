import React, { useState, useEffect } from 'react';
import { getDataFromThingSpeak } from '../services/ThingSpeakService';

function DataDisplay() {
  const [data, setData] = useState([]);

  console.log("AQUIIIIII");

  useEffect(() => {
    const fetchData = async () => {
      const channelId = '2001088';
      const readKey = 'VPRUHCQ9MV2DNMSH';
      const fetchedData = await getDataFromThingSpeak(channelId, readKey);
      setData(fetchedData);
    };
    fetchData();
  }, []);

  console.log(data);
  

  return (
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Field 1</th>
          <th>Field 2</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.created_at}</td>
            <td>{row.field1}</td>
            <td>{row.field2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataDisplay;
