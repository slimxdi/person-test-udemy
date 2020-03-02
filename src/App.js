import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person personname="Archie" age="30"></Person>
        <Person personname="Barker" age="31">I like turtles.</Person>
      </div>
    )
  }
}

export default App;
