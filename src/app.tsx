import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './Store';

const loading = () => (
  <div className='animated fadeIn pt-3 text-center'>
    <Spinner animation='grow' />
  </div>
);

const Layout = React.lazy(() => import('./Containers/Layout/layout'));

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route
                  path='/'
                  name='Main'
                  render={(props) => <Layout {...props} />}
                />
              </Switch>
            </React.Suspense>
          </HashRouter>
          {/* </PersistGate> */}
        </Provider>
      </div>
    );
  }
}

export default App;
