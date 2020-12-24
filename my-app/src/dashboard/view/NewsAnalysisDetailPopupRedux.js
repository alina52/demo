import { connect } from 'react-redux'
import { closeNewsAnalysisDetailPopup } from 'src/dashboard/actions'
import NewsAnalysisDetailPopup from 'src/dashboard/view/NewsAnalysisDetailPopup'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        selectedNewsAnalysisResult : state.dashboardReducer.selectedNewsAnalysisResult,
        isNewsAnalysisDetailPopupOpen : state.dashboardReducer.isNewsAnalysisDetailPopupOpen,
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        closeNewsAnalysisDetailPopup : () => {
            dispatch(closeNewsAnalysisDetailPopup())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsAnalysisDetailPopup);