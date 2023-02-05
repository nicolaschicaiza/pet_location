import React from 'react';
import {getData} from '../../services/ThingSpeakService';
import LineChart from './LineChart.jsx';
import { Data } from "./Data";

/**
 * Obtiene los datos de la API de ThingSpeak y los muestra en la consola
 * @returns 
 */
export function MainGraph() {
    const data = getData();
    console.table(data);

    return (<div>

    </div>);
}

/**
 * Funcion que retorna una tabla con los datos de la API de ThingSpeak
 * @param {*} props 
 * @returns 
 */
export function Table(props) {
    const data = getData();
    //console.table(data);

    //tabla con todos los datos de la api
    return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Temperatura</th>
                    <th>Humedad</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.created_at.substring(0,10)}</td>
                        <td>{item.created_at.substring(11,19)}</td>
                        <td>{item.field1}</td>
                        <td>{item.field2}</td>
                        <td>{item.field3}</td>
                        <td>{item.field4}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>);
}

/**
 * Funcion que retorna un grafico con los datos de la API de ThingSpeak
 * @param {*} props
 * @returns
 */
export function Graph(props) {

    //Obtener los datos de la API
    const data = getData();
    //console.table(data);

    if(props.graph === "temp"){
        
        //Areglo con los datos de la temperatura
        const temp = data.map((item, index) => (
            item.field3
        ));
            //console.table(temp);

        //tabla con todos los datos de la api
        return (
            <div>
                <LineChart chartData={ temp } title="Temperatura" />
            </div>
        );
    }else if(props.graph === "hum"){
        //Areglo con los datos de la humedad
        const hum = data.map((item, index) => (
            item.field4
        ));
            //console.table(hum);

        //tabla con todos los datos de la api
        return (
            <div>
                <LineChart chartData={ hum } title="Humedad" />
            </div>
        );
    }else{
        return (<div>

        </div>);
    }


}