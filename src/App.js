import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import About from './components/pages/About';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  /*   async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }
 */
  // Search GitHub users
  const searchUsers = async text => {
    setLoading({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  // Get single gitHub user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}`);

    setUser(res.data);
    setLoading(false);
  };

  // Get user repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=8&sort=created:asc`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
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
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
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
