import axios from 'axios';

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
    const response = await axios.get(
      `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${readKey}`
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
