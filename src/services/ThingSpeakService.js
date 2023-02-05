import React, { useState, useEffect } from "react";
/**
 * Esta función realiza una petición GET a la API de ThingSpeak utilizando los parámetros recibidos 
 * y retorna los datos obtenidos en formato JSON.
 * Channel ID: 2001088
 * readKey: VPRUHCQ9MV2DNMSH
 * @param {*} channelId 
 * @param {*} readKey 
 * @returns 
 */
export const getDataFromThingSpeak = async (channelId, readKey) => {
  try {
    const response = await fetch(
      `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${readKey}&results=100`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};


/**
 * Get ThinkSpeak data
 */
export function getData() {
  const [data, setData] = useState([]);
  require("dotenv").config();

  useEffect(() => {
    const fetchData = async () => {
      const channelId = process.env.REACT_APP_THINGSPEAK_CHANNEL_ID;
      const readKey = process.env.REACT_APP_THINGSPEAK_READKEY;
      const response = await getDataFromThingSpeak(channelId, readKey);
      const res = await response.json();
      //console.log(res.feeds);
      setData(res.feeds);
    };
    fetchData();
  }, []);

  return data;
}
