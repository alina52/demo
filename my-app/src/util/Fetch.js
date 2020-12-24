import arrayFindIndex from 'array-find-index'
import fetch from 'isomorphic-fetch'

import * as Constants from 'src/app/constants'
import urls from 'src/config/Urls'
import appConfig from 'src/config/AppConfig'

export const queryUrl = (url, params) => {
    var urlWithParams = url + (url.indexOf('?') === -1 ? '?' : '&') + Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&')
    return urlWithParams
}

const successHandler = (dispatch, options, requestType, successType, json) => {
    dispatch({type : Constants.FETCH_SUCCESS,
        options : options,
        requestType : requestType
    })

    if (successType) {
        dispatch({type : successType, options : options, data : json})
    }
}

const errorHandler = (dispatch, options, requestType, errorType, err) => {
    dispatch({type : Constants.FETCH_ERROR,
        options : options, 
        requestType : requestType
    })

    if (errorType) {
        dispatch({type: errorType, options : options, data: err})
    }
}

const fetch2 = (dispatch, uri, options={}, requestType, successType, errorType) => {
    var url = urls.wsUrl(uri)
    const headers = {'Content-Type': 'application/json'}

    options.headers = options.headers || headers
    if (options.showErrorMessage === undefined) {
        options.showErrorMessage = true
    }

    if (appConfig.mockData) {
        console.log('Manually set body & quesyParmas as null as they will impact loading the data from json file')
        console.log(options.body)
        console.log(options.queryParams)
        options.body = null 
        options.method = 'GET'
        if (appConfig.mockHttpErrorEnabled) {
            url = url.replace(/json$/, 'error.json');
            console.log('redirecting url to error.json ' + url)
        }
    } else {
        if (options.queryParams) {
            url = queryUrl(url, options.queryParams)
        }
        if (arrayFindIndex(['POST', 'PUT', 'DELETE'], m => m === options.method)) {
            options.headers = headers
        }
    }

    dispatch({type : Constants.FETCH_START, options : options, requestType : requestType})
    dispatch({type: requestType, options : options})

    return fetch(url, options)
        .then(response =>{
            const status = response.status
            return response.text().then(text => {
                var json;
                try {
                    json = JSON.parse(text)
                }  catch(err) {
                    var throwErr = new Error()
                    throwErr.status = status
                    throwErr.errorCode = ""
                    throwErr.message = "Not a JSON result " + err.message
                    throwErr.body = text
                    throw throwErr
                }
                if (!response.ok) {
                    var notOkErr = new Error()
                    notOkErr.status = status
                    notOkErr.errorCode = json.errorCode
                    notOkErr.message = json.message || json.error || '<No Details>'
                    notOkErr.body = text
                    throw notOkErr
                }

                if (appConfig.mockHttpErrorEnable) {
                    json.status = 500
                    throw json
                }

                json.status = status

                if (appConfig.mockData) {
                    setTimeout(() => successHandler(dispatch, options, requestType, successType, json), 1000)
                } else {
                    successHandler(dispatch, options, requestType, successType, json)
                }

                if (options.onSuccessCallback) {
                    options.onSuccessCallback(json)
                }
            })
        })
        .catch(caughtError => {
            if (appConfig.mockData) {
                setTimeout(() => errorHandler(dispatch, options, requestType, errorType, caughtError), 1000)
            } else {
                errorHandler(dispatch, options, requestType, errorType, caughtError)
            }

            if (options.onErrorCallback) {
                options.onErrorCallback(caughtError)
            }
        })
}

export default fetch2