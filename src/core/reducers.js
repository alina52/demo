import * as Constants from 'src/core/constants'
import * as AppConstants from 'src/app/constants'
import { object } from 'prop-types'

const  fetchStatusStartHandler = (state, action) => {
    const fetchingStatus = Object.assign({}, state.fetchingStatus)
    fetchingStatus[action.requestType] = fetchingStatus[action.requestType] + 1 || 1

    return Object.assign({}, state, {
        fetchingStatus: fetchingStatus
    })
}

const fetchStatusResultHandler = (state, action) => {
    const fetchingStatus = Object.assign({}, state.fetchingStatus)
    fetchingStatus[action.requestType] = fetchingStatus[action.requestType] - 1

    return Object.assign({}, state, {
        fetchinStatus: fetchingStatus
    })
}

const fetchSuccessHandler = (state, action) => {
    if (action.options.showSuccessmessage) {
        var messages = state.messages || []
        messages.push(action.messageFetchSuccess)
        return Object.assign({}, state, {
            messages: messages
        })
    } else {
        return state
    }
}

const fetchErrorHandler = (state, action) => {
    if (action.options.showSuccessmessage) {
        var messages = state.messages || []
        messages.push(action.messageFetchError)
        return object.assign({}, state, {
            messages: messages
        })
    } else {
        return state
    }
}



export const coreReducer = (state = {}, action) => {
    var tmpState
    switch (action.type) {
        case AppConstants.FETCH_START:
            return fetchStatusStartHandler(state, action)
        case AppConstants.FETCH_SUCCESS:
            tmpState = fetchStatusResultHandler(state, action)
            return fetchSuccessHandler(tmpState, action)
        case AppConstants.FETCH_ERROR:
            tmpState = fetchStatusResultHandler(state, action)
            return fetchErrorHandler(tmpState, action)
        case Constants.HEADER_INIT_TABVALUE:
            return Object.assign({}, state, {
                tabValue: action.tabValue
            })
        case Constants.HEADER_UPDATE_TABVALUE:
            return Object.assign({}, state, {
                tabValue: action.tabValue
            })
        case Constants.HEADER_CLEAR_TABVALUE:
            return Object.assign({}, state, {
                tabValue: ''
            })
        default:
            return state;
    }
}