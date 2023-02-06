import React, { Fragment } from "react";
import { Graph } from "../components/Graphics/MainGraph";

function Necklace() {
    return (
        <Fragment>
            <Graph graph="temp" />
            <Graph graph="hum" />
        </Fragment>
    )
}

export { Necklace };
