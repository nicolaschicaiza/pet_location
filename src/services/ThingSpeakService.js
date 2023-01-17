
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
      `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${readKey}`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
