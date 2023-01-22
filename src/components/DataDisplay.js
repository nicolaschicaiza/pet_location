import React, { useState, useEffect } from 'react';
import { getDataFromThingSpeak } from '../services/ThingSpeakService';

function DataDisplay() {
  const [data, setData] = useState([]);

  require("dotenv").config();

  useEffect(() => {
    const fetchData = async () => {
      const channelId = process.env.REACT_APP_THINGSPEAK_CHANNEL_ID;
      const readKey = process.env.REACT_APP_THINGSPEAK_READKEY;
      const response = await getDataFromThingSpeak(channelId, readKey);
      const res = await response.json();
      console.log(res.feeds);
      setData(res.feeds);
    };
    fetchData();
  }, []);

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
            <td>{row.field3}</td>
            <td>{row.field4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataDisplay;
