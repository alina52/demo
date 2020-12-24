import { connect } from 'react-redux'
import { fetchAllNewsSortedByTime } from 'src/timeline/actions'
import { fetchSelectedNewsAnalysisResult } from 'src/dashboard/actions'

import TimelinePage from 'src/timeline/view/TimelinePage'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        newListForTimeline : state.timelineReducer.newListForTimeline
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

export default connect(mapStateToProps, mapDispatchToProps)(TimelinePage);