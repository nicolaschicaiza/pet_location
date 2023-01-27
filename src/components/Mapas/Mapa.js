import React from "react";
import { useMemo } from "react";

import { GoogleMap, useLoadScript, Marker, Autocomplete,onLoad,google} from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: '500px',
 
};

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyADMmNu0Siiu7nqmGtDIyUwsaXOwzc5wdo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map/>;
  
}

function Map() {

  const center = useMemo(() => ({ lat: 2.441648, lng:  -76.608071 }), []);

  return (
    
    <GoogleMap mapContainerStyle={containerStyle} 
    zoom={13} center={center}  >
   
      
        <Marker  position={{ lat: 2.441648, lng:  -76.608071 }}/> 
    </GoogleMap>
  );
}
