import * as Constants from 'src/dashboard/constants'

const processReceiveSelectedNewsDetail = (state, action) => {
    const newsList = Object.deepCopy(state.newsList)
    const selectedNewsAnalysisResult = newsList.filter(n => n.id === action.selectedNewsId)[0] || []

    return Object.assign({}, state, {
        selectedNewsAnalysisResult: selectedNewsAnalysisResult,
        isNewsAnalysisDetailPopupOpen : true
    })
}
export const dashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.DASHBOARD_REVEIVE_NEWS_LIST:
            return Object.assign({}, state, {
                newsList: action.data
            })
        case Constants.DASHBOARD_RECEIVE_SELECTED_NEWS_DETAIL:
            return processReceiveSelectedNewsDetail(state, action)
        case Constants.DASHBOARD_CLOSE_NEWS_ANALYSIS_DETAIL_POPUP:
            return Object.assign({}, state, {
                isNewsAnalysisDetailPopupOpen : false
            })
        default:
            return state;
    }
}