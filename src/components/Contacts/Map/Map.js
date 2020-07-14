import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = ({ location, zoom }) => {       
    const CustomMap = withGoogleMap(props => (
        <GoogleMap defaultCenter = { location } defaultZoom = { zoom }>
            <Marker position  = { location } />
        </GoogleMap>
    ));

    return <CustomMap
                containerElement = { <div style = {{ height: '100%', width: '100%' }} /> }
                mapElement = { <div style = {{ height: '100%' }} /> } />
}

export default React.memo(withScriptjs(Map));
