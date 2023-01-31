import React ,{ useState}from 'react';
import { FaPowerOff } from "react-icons/fa";
import "./Buzzer.css";

//metodo post con react y fetch links de ayuda:
//https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
//https://stackblitz.com/edit/react-http-post-request-examples-fetch?file=App%2FApp.jsx

const Buzzer = () => {
    const [valueBuzzer, setValueBuzzer] = useState(false);

        const apagar = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ api_key:process.env.REACT_APP_THINGSPEAK_WRITEKEY,
                  field5: 0 })
        };

        const encender = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ api_key:process.env.REACT_APP_THINGSPEAK_WRITEKEY,
                  field5: 1 })
        };
        const off = () => {
            fetch('https://api.thingspeak.com/update.json', apagar)
            // .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));
        }

        const on = () => {
            fetch('https://api.thingspeak.com/update.json', encender)
            // .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));
        }
        const onChangeValue = () => {
            setValueBuzzer(!valueBuzzer);
            if (valueBuzzer) {
                fetch("https://api.thingspeak.com/update.json", encender);
            } else {
                fetch("https://api.thingspeak.com/update.json", apagar);
            }
        };

        return (
            <div className="container-button">
            <button
                onClick={onChangeValue}
                className={`btn btn--off ${valueBuzzer && "btn--on"}`}
            >
                <FaPowerOff />
            </button>
        </div>
            
        );
    // }
}

export {Buzzer}; 