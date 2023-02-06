import React, { Fragment } from "react";
import { Graph, Table, GetMetadata } from "../components/Graphics/MainGraph";
import { getDataAll } from "../services/ThingSpeakService";
import Highlight from "../components/Highlight";

function Metadata() {
    return (
        <Fragment className="d-flex justify-content-center">
            <GetMetadata />
        </Fragment>
    );
}

export { Metadata };
