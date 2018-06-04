import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import { Todos } from './containers/Todos';
import { About } from './containers/About';
import { Error } from './containers/Error';
import { Protected } from './containers/Protected';
// import { hot } from 'react-hot-loader';
 
/*export const App = hot(module)(() => (
  <div>
    <nav>
      <ul>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/protected">Protected</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/todos" component={Todos} />
      <Route path="/about" component={About} />
      <Route path="/error" component={Error} />
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  </div>
)); */


export class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/protected">Protected</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/about" component={About} />
          <Route path="/error" component={Error} />
          <PrivateRoute path="/protected" component={Protected} />
        </Switch>
      </div>
    );
  }
}

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb: any) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb: any) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
};

const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/error' />
  )} />
);
