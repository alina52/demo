import { connect } from 'react-redux'
import { fetchGeoJson } from 'src/map/actions'
import WorldMap from 'src/map/view/WorldMap'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        // geoJson : state.worldMapReducer.geoJson,
        namemap : state.worldMapReducer.namemap,
        dataArr : state.worldMapReducer.dataArr
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        requestGeoJson : () => {
            dispatch(fetchGeoJson())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldMap);