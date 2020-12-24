import urls from 'src/config/Urls'

class AppConfig {
    baseUrl : null
    basePageUrl : null
    baseWsUrl : null
    baseStaticUrl : null
    mockData: null

    initialize(config) {
        this.baseUrl = config.baseUrl
        this.baseWsUrl = config.baseWsUrl
        this.basePageUrl = config.basePageUrl
        this.baseStaticUrl = config.baseStaticUrl

        this.mockData = config.mockData
        urls.init(this.basePageUrl, this.baseWsUrl, this.baseStaticUrl, this.baseUrl)
    }
}

const _instance = new AppConfig()
export default _instance