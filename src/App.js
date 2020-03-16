import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

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
