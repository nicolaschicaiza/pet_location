import React from 'react';


//metodo post con react y fetch links de ayuda:
//https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
//https://stackblitz.com/edit/react-http-post-request-examples-fetch?file=App%2FApp.jsx

const Buzzer = () => {

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

        return (
            <div >
                <h5 >Encender o apagar alarma</h5>
                <div>
                <button onClick= {on} > Encender </button>
                <button onClick= {off} > Apagar </button> 
                </div>
            </div>
            
        );
    // }
}

export {Buzzer}; 