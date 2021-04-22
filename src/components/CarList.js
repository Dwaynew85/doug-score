import React, { useEffect } from 'react';
import config from "../config";

function CarList() {

    useEffect(() => {
        window.gapi.load("client", this.initClient);
    }, [])

    initClient = () => {
        window.gapi.client
            .init({
                apiKey: config.apiKey,
                discoveryDocs: config.discoveryDocs
            })
            .then(() => {
                load(this.onLoad);
            });
    };

    return (
        <div>
            This will be the car list
        </div>
    )
}

export default CarList
