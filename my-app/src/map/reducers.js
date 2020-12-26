import * as Constants from 'src/map/constants'

export const worldMapReducer = (state = {}, action) => {
    var tmpState
    switch (action.type) {
        case Constants.CORE_REVEIVE_GEOJSON:
            return Object.assign({}, state, {
                // geoJson: action.data
                namemap : action.data.namemap,
                dataArr : action.data.dataArr
            })
        default:
            return state;
    }
}