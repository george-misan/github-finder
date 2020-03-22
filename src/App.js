import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';

import GithubState from './context/github/githubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  /*   async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }
 */
  // Search GitHub users

  // Get single gitHub user

  // Get user repos

  // Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

/* class App extends Component {
  moo = () => 'Harley Quinn';
  render() {
    const name = 'Helsinki';
    const loading = false;
    const showName = true;

    const foo = a => a + 22; 
    return (
      <div className="App">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <h1>Hello from {showName && name}</h1>
        )}
        <h2>Good day {this.moo()}</h2>
      </div>
    );
  }
}

export default App; */
