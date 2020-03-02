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

  switchNameHandler = () => {
    this.setState({
      persons: [
        { personname: 'PsuedoArchie', age: 60},
        { personname: 'PsuedoBarker', age: 61},
        { personname: 'PsuedoCedric', age: 62}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person personname={this.state.persons[0].personname} age={this.state.persons[0].age}></Person>
        <Person personname={this.state.persons[1].personname} age={this.state.persons[1].age}>I like turtles.</Person>
        <Person personname={this.state.persons[2].personname} age={this.state.persons[2].age}>I like broccoli corn chowder.</Person>
      </div>
    )
  }
}

export default App;
