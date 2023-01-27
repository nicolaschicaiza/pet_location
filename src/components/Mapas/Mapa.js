import React from "react";
import { useMemo } from "react";

import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: '500px',
 
};

export default function Home() {
  require("dotenv").config();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map/>;
  
}

function Map() {

  const center = useMemo(() => ({ lat: 2.441648, lng:  -76.608071 }), []);

  return (
    
    <GoogleMap mapContainerStyle={containerStyle} 
    zoom={13} center={center}  >
        <Marker  position={{ lat: 2.44, lng:  -76.60 }}/> 
    </GoogleMap>
  );
}
