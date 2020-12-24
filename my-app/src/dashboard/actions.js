import fetch from 'src/util/Fetch'
import * as Constants from 'src/dashboard/constants'

export const fetchAllNews = () => {
    return dispatch => 
    fetch(
        dispatch,
        Constants.DASHBOARD_URL_NEWS_LIST,
        {
           method : 'GET'
         },
        Constants.DASHBOARD_REQUEST_NEWS_LIST,
        Constants.DASHBOARD_REVEIVE_NEWS_LIST
    );
};

// This is a mock api so we don't need to fetch any json, only use the existing social-events.json to do a filter.
export const fetchSelectedNewsAnalysisResult = (newsId) => {
    return {
        type: Constants.DASHBOARD_RECEIVE_SELECTED_NEWS_DETAIL,
        selectedNewsId : newsId
    };
}

export const closeNewsAnalysisDetailPopup = () => {
    return {
        type: Constants.DASHBOARD_CLOSE_NEWS_ANALYSIS_DETAIL_POPUP
    };
}