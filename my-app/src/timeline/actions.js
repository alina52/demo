import fetch from 'src/util/Fetch'
import * as Constants1 from 'src/dashboard/constants'
import * as Constants2 from 'src/timeline/constants'


export const fetchAllNewsSortedByTime = () => {
    return dispatch => 
    fetch(
        dispatch,
        Constants1.DASHBOARD_URL_NEWS_LIST,
        {
           method : 'GET'
         },
        Constants2.DASHBOARD_REQUEST_NEWS_LIST_SORTED_BY_TIME,
        Constants2.DASHBOARD_RECEIVE_NEWS_LIST_SORTED_BY_TIME,
    );
};