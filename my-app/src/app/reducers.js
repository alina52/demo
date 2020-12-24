import urls from 'src/config/Urls';

const LOCATION_CHANGE='@@router/LOCATION_CHANGE'

const urlRouterHandler = (state, pathname) => {
    const pageName = urls.findPageNameByUrl(pathname)

    return Object.assign(state, {
        page : pageName
    })
}

export function routerReducer(state={}, { type, payload } = {}) {
    var resultState = state
    if (type === LOCATION_CHANGE) {
        const pathname = payload.pathname
        resultState = urlRouterHandler(state, pathname)
        
    }
    return resultState
}