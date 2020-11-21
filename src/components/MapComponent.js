import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
    return (
        <GoogleMap defaultZoom={10}
            defaultCenter={{ lat: 43.653225, lng: -79.383186 }}
        />
    );
}



export default Map; 



