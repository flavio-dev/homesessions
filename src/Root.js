import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomeContainer from 'routes/home/HomeContainer'
import CloudcastDetailsContainer from 'routes/cloudcastDetails/CloudcastDetailsContainer'
import Contact from 'routes/contact/Contact'
import About from 'routes/about/About'
import Layout from 'components/Layout'
import 'index.css'

export const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/:cloudcastId' component={CloudcastDetailsContainer} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default Root
