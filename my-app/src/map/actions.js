import * as Constants from 'src/map/constants'
import fetch from 'src/util/Fetch'

export const fetchGeoJson = () => {
    return dispatch => 
    fetch(
        dispatch,
        Constants.CORE_URL_GEOJSON,
        {
           method : 'GET'
         },
        Constants.CORE_REQUEST_GEOJSON,
        Constants.CORE_REVEIVE_GEOJSON
    );
};