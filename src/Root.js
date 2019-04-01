import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import LayoutContainer from 'components/LayoutContainer'
import CloseIcon from 'components/CloseIcon'
import scrollIntoView from 'hocomponents/ScrollIntoView'

import 'index.css'

const HomeContainer = lazy(() => import('routes/home/HomeContainer'))
const CloudcastDetailsContainer = lazy(() => import('routes/cloudcastDetails/CloudcastDetailsContainer'))
const Contact = lazy(() => import('routes/contact/Contact'))
const About = lazy(() => import('routes/about/About'))

export const Root = ({ store, history }) => (
  <Provider store={store}>
    <ToastContainer
      transition={Slide}
      className='toast-container'
      toastClassName='toast'
      progressClassName='toast-progressbar'
      closeButton={<CloseIcon />}
    />
    <ConnectedRouter history={history}>
      <Suspense fallback={
          <LayoutContainer>
            <div>Loading...</div>
          </LayoutContainer>
        }>
        <Switch>
          <LayoutContainer>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/contact' component={scrollIntoView(Contact)} />
            <Route exact path='/about' component={scrollIntoView(About)} />
            <Route exact path='/:cloudcastId' component={scrollIntoView(CloudcastDetailsContainer)} />
          </LayoutContainer>
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default Root
