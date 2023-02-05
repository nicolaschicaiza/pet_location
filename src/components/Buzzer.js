import React, { useState, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";
import { getDataFromThingSpeak } from "../services/ThingSpeakService";
import "./Buzzer.css";

//metodo post con react y fetch links de ayuda:
//https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
//https://stackblitz.com/edit/react-http-post-request-examples-fetch?file=App%2FApp.jsx

const Buzzer = () => {
  const [data, setData] = useState([]);
  // let markers = [];
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

  const estados = [];

  let cons = data.length - 30;
  if (cons > 0) {
    for (let i = cons; i < data.length; i++) {
      //guardados todos
      estados[i] = parseInt(data[i].field5);
      
      //console.log("Estados: " + estados[i]);
    }
  }


let est=-2;
  for(let i=estados.length; i>0; i--){
    //console.log("i: "+i);
    //console.log(estados[i]);
      if(estados[i] == 0 || estados[i] == 1){
        est = estados[i];
        break;
      }
  }

  //console.log("REsultado: "+est);

  const [valueBuzzer, setValueBuzzer] = useState(false);

  const apagar = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.REACT_APP_THINGSPEAK_WRITEKEY,
      field5: 0,
    }),
  };

  const encender = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: process.env.REACT_APP_THINGSPEAK_WRITEKEY,
      field5: 1,
    }),
  };
  let estado1 = -1;
  const onChangeValue = () => {
    if (est == 0) {
      estado1 = 1;
    } else {
      estado1 = 0;
    }
    if (estado1 == 1) {
      fetch("https://api.thingspeak.com/update.json", encender);
    } else {
      fetch("https://api.thingspeak.com/update.json", apagar);
    }
  };

  //console.log("estado1 " + estado1);
  return (
    <div className="container-button">
      <button
        onClick={onChangeValue}
        className={`btn   ${est == 0 && "btn--off"} ${
          est == 1 && "btn--on"
        } `}
      >
        <FaPowerOff />
      </button>
    </div>
  );
  // }
};

export { Buzzer };
