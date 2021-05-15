import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import AppLayout from 'components/app-layout'
import LandingLayout from 'components/landing-layout'
import Login from 'pages/login'
import { useStores } from 'stores/RootStore'


interface RouteProps {
  children: React.ReactNode;
  path?: string;
  exact?: boolean;
}

const PublicRoute: React.FC<RouteProps> = observer(({ children, ...rest }) => {
  const { authStore } = useStores()
  const isAuthenticated = authStore.isAuthenticated

  return <Route {...rest} render={({ location }) =>
    isAuthenticated ? <Redirect to={{pathname: '/app', state: { from: location }}} /> : children
  } />
})

const PrivateRoute: React.FC<RouteProps> = observer(({ children, ...rest }) => {
  const { authStore } = useStores()
  const isAuthenticated = authStore.isAuthenticated

  return <Route {...rest} render={({ location }) =>
    isAuthenticated ? children : <Redirect to={{pathname: '/login', state: { from: location }}} />
  } />
})

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/">
            <LandingLayout />
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <Route exact path="/app" render={() => <Redirect to="/app/road-sections" />} />
          <PrivateRoute path="/app">
            <AppLayout />
          </PrivateRoute>
          {/* <Route component={Error} /> */}
        </Switch>
      </BrowserRouter>
  )
}

export default App