import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LayoutContainer from 'components/LayoutContainer'
import CloseIcon from 'components/CloseIcon'
// import LoadingScreen from 'components/LoadingScreen'
import scrollIntoView from 'hocomponents/ScrollIntoView'

import 'index.css'

// const HomeContainer = lazy(() => import('routes/home/HomeContainer'))
// const CloudcastDetailsContainer = lazy(() => import('routes/cloudcastDetails/CloudcastDetailsContainer'))
// const Contact = lazy(() => import('routes/contact/Contact'))
// const About = lazy(() => import('routes/about/About'))

import HomeContainer from 'routes/home/HomeContainer'
import CloudcastDetailsContainer from 'routes/cloudcastDetails/CloudcastDetailsContainer'
import Contact from 'routes/contact/Contact'
import About from 'routes/about/About'

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
      <LayoutContainer>
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route path='/contact' component={scrollIntoView(Contact)} />
          <Route path='/about' component={scrollIntoView(About)} />
          <Route path='/:cloudcastId' component={scrollIntoView(CloudcastDetailsContainer)} />
        </Switch>
      </LayoutContainer>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default Root
