import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons: [
      { personname: 'Archie', age: 30},
      { personname: 'Barker', age: 31},
      { personname: 'Cedric', age: 32}
    ]
  }

  render() {
    return (
      <div className="App">
        <Person personname={this.state.persons[0].personname} age="30"></Person>
        <Person personname={this.state.persons[1].personname} age="31">I like turtles.</Person>
        <Person personname={this.state.persons[2].personname} age="32">I like broccoli corn chowder.</Person>
      </div>
    )
  }
}

export default App;
