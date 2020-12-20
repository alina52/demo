import fetch from 'src/util/Fetch'
import * as Constants from 'src/dashboard/constants'

// export const fetchAllNews = () => {
//     return dispatch => {
//         return fetch(dispatch, 
//             Constants.DASHBOARD_URL_NEWS_LIST,
//             {
//                 method : 'GET'
//             },
//             Constants.DASHBOARD_REQUEST_NEWS_LIST,
//             Constants.DASHBOARD_REVEIVE_NEWS_LIST
//             )
//     }
// }

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