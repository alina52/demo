const rewireMobX = require('react-app-rewire-mobx')
const {injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env) {
    config = injectBabelPlugin('babel-plugin-react-component-data-attribute', config)
    config = rewireMobX(config, env)
    return config
}