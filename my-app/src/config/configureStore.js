import { routerMiddleware, routerReducer } from "react-router-redux"
import { configureUrlQuery } from "react-url-query"
import { applyMiddleware, combineReducers, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import * as appReducers from "src/app/reducers"
import * as dashboardReducers from "src/dashboard/reducers"
import * as coreReducers from "src/core/reducers"

export default function configureStore(preloadedState, history) {
    configureUrlQuery({history:history})
    const loggerMiddleware = createLogger()
    const routerMiddleware1 = routerMiddleware(history)
    const reducers = {
        routing: routerReducer
    }

    Object.assign(
        reducers,
        appReducers,
        coreReducers,
        dashboardReducers
    )

    const rootReducer = combineReducers(reducers)
    return createStore (
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, routerMiddleware1, loggerMiddleware)
    )
}