import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import routes from '../../Routes';

const Header = React.lazy(() => import('./header'));
const Footer = React.lazy(() => import('./footer'));

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  loading = () => (
    <div>
      <Spinner animation='grow' />
    </div>
  );

  render() {
    return (
      <div className='app'>
        <Suspense fallback={this.loading()}>
          <Header />
        </Suspense>
        <div className='app-body' style={{ padding: '60px 0 0 0' }}>
          <main className='main'>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, i) => {
                    return (
                      route.component && (
                        <Route
                          key={i}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => <route.component {...props} />}
                        />
                      )
                    );
                  })}
                  <Redirect from='/' to='/home' />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
        <div style={{ display: 'flex', height: '50px', padding: '0 1rem' }}>
          <Suspense fallback={this.loading()}>
            <Footer />
          </Suspense>
        </div>
      </div>
    );
  }
}

export default Layout;
