import * as Constants from 'src/dashboard/constants'
import { object } from 'prop-types'

export const dashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.DASHBOARD_REVEIVE_NEWS_LIST:
            return Object.assign({}, state, {
                newsList: action.data
            })
        default:
            return state;
    }
}