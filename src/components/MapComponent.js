import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map() {
    return (
        <>
            <GoogleMap defaultZoom={10}
                defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
            />
            <Marker position={{ lat: 43.6662, lng: -79.3343 }}
            />
        </>
    );
}



export default Map;



