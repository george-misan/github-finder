import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import About from './components/pages/About';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import './App.css';

const App = () => {
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

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
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
