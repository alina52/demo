import { connect } from 'react-redux'
import { fetchAllNews, fetchSelectedNewsAnalysisResult } from 'src/dashboard/actions'
import News from 'src/dashboard/view/News'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        newsList : state.dashboardReducer.newsList
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
        requestNews : () => {
            dispatch(fetchAllNews())
        },

        openNewsAnalysisDetailPopup : (newsId) => {
            dispatch(fetchSelectedNewsAnalysisResult(newsId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);