import { connect } from 'react-redux'
import { fetchAllNewsSortedByTime } from 'src/timeline/actions'
import { fetchSelectedNewsAnalysisResult } from 'src/dashboard/actions'

import Timeline from 'src/timeline/view/Timeline'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        newsList : state.dashboardReducer.newsList
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
        requestNewsForTimeline : () => {
            dispatch(fetchAllNewsSortedByTime())
        },

        openNewsAnalysisDetailPopup : (newsId) => {
            dispatch(fetchSelectedNewsAnalysisResult(newsId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);