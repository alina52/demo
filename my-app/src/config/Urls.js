import * as Constants from 'src/app/constants'

class Urls {
    _dictionary : null
    basePageUrl : null
    baseWsUrl : null
    baseStaticUrl : null

    constructor() {
        this._dictionary = {}
        this.findPageNameByUrl = this.findPageNameByUrl.bind(this)
    }

    init(basePageUrl, baseWsUrl, baseStaticUrl, baseUrl) {
        this.basePageUrl = basePageUrl
        this.baseWsUrl = baseWsUrl
        this.baseStaticUrl = baseStaticUrl
        this.baseUrl = baseUrl
        const pageUrls = [
            {key : Constants.PAGE_DASHBOARD, value : '/'}
        ]

        pageUrls.forEach(item => this._dictionary[item.key] = basePageUrl + item.value)

        this._dictionary[Constants.PAGE_DASHBOARD] = (basePageUrl === '' ? '/' : basePageUrl)
    }

    url(key) {
        if (!this._dictionary[key]) {
            console.error('URL key not registered, check both this clsss and app/constants')
            return `${key}_NOT_FOUND`
        }
        return this._dictionary[key]
    }

    findPageNameByUrl(pageUrl) {
        var candidates = []
        for (var key in this._dictionary) {
            if(pageUrl.indexOf(this._dictionary[key]) >= 0) {
                candidates.push({key : key, len : this._dictionary[key].length})
            }
        }
    
        if (candidates.length > 0) {
            var maxLength = 0
            var result = ''
            candidates.forEach(c => {
                if(maxLength < c.len) {
                    maxLength = c.len
                    result = c.key
                }
            })
            return result
        }

        return `${pageUrl}_NAME_NOT_FOUND`
    }

    pageDashboard() { return this.url(Constants.PAGE_DASHBOARD)}

    wsUrl(uri) {
        return this.baseWsUrl + (uri.indexOf('/') === 0 ? uri : '/' + uri)
    }

    staticUrl(uri) {
        return this.baseStaticUrl + uri
    }
}

const _instance = new Urls()
export default _instance