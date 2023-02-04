import React, { useState, useEffect } from "react";
import { getDataFromThingSpeak } from "../services/ThingSpeakService";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";


const containerStyle = {
  width: "100%",
  height: '500px',
 
};

function DataDisplay() {
  const google = window.google;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  const [data, setData] = useState([]);
  // let markers = [];
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
  
  const markers = [];

  let cons = (data.length ) - 10;
  if(cons > 0){
    for (let i = cons; i < data.length; i++) {
      //guardados todos
      markers[i] = {
        lat: parseFloat(data[i].field1),
        lng: parseFloat(data[i].field2),
      };
      console.log(markers[i]); 
    }
   
  }

  const center = useMemo(() => ({ lat:  2.441926, lng: -76.607341 }), []);
  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    //map.fitBounds(bounds);
  };

  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Timestamp</th>
    //       <th>Field 1</th>
    //       <th>Field 2</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.map((row, index) => (
    //       <tr key={index}>
    //         <td>{row.created_at}</td>
    //         <td>{row.field1}</td>
    //         <td>{row.field2}</td>
    //         <td>{row.field3}</td>
    //         <td>{row.field4}</td>
    //       </tr>
    //     ))}
    //       <h1> hola</h1>

    //   </tbody>

    // </table>

    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap zoom={12} mapContainerStyle={containerStyle} onLoad={onLoad} center={center}>
          {markers.map(({ lat, lng }) => (
            <MarkerF position={{ lat, lng }} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
}

export  {DataDisplay};
