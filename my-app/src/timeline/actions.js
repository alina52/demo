import fetch from 'src/util/Fetch'
import * as Constants from 'src/timeline/constants'


export const fetchAllNewsSortedByTime = () => {
    return dispatch => 
    fetch(
        dispatch,
        Constants.TIMELINE_URL_NEWS_LIST,
        {
           method : 'GET'
         },
        Constants.TIMELINE_REQUEST_NEWS_LIST_SORTED_BY_TIME,
        Constants.TIMELINE_RECEIVE_NEWS_LIST_SORTED_BY_TIME,
    );
};