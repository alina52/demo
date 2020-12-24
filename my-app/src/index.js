import "@babel/polyfill"
import React from "react"
import ReactDom from "react-dom"
import { Provider} from 'react-redux'
import { ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { MuiThemeProvider } from '@material-ui/core/styles'
import appMuiTheme from 'src/config/AppMuiTheme'
import configureStore from 'src/config/configureStore'
import App from 'src/app'
import appConfig from 'src/config/AppConfig'
import * as ExtendedObject from 'src/util/ExtendedObject'

appConfig.initialize(window.CONFIG)
delete window.CONFIG

const history = createHistory()
const store = configureStore({}, history)

ExtendedObject.bind()

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={appMuiTheme}>
          <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)