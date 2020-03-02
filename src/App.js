import React, {useState} from 'react';
import Person from './Person/Person'
import './App.css';

const App = props => {
  const [personState, setPersonState] = useState(
    {
      persons: [
        { personname: 'Archie', age: 30},
        { personname: 'Barker', age: 31},
        { personname: 'Cedric', age: 32}
      ]
    }
  );

  const switchNameHandler = (newName) => {
    setPersonState(
      {
      persons: [
          { personname: newName, age: 60},
          { personname: 'PsuedoBarker', age: 61},
          { personname: 'PsuedoCedric', age: 62}
        ]
      }
    )
  };

  const nameChangedHandler = (event) => {
    setPersonState(
      {
        persons: [
          { personname: 'Maximus', age: 60},
          { personname: event.target.value, age: 61},
          { personname: 'PsuedoCedric', age: 62}
        ]
      }
    )
  }

  return (
    <div className="App">
      <button onClick={()=>switchNameHandler('Maxima!')}>Switch Name</button>
      <Person
        personname={personState.persons[0].personname}
        age={personState.persons[0].age}>

      </Person>
      <Person
        personname={personState.persons[1].personname}
        age={personState.persons[1].age}
        click={switchNameHandler.bind(this, 'Max!')}
        changed={nameChangedHandler}>I like turtles.
      </Person>
      <Person
        personname={personState.persons[2].personname}
        age={personState.persons[2].age}>I like broccoli corn chowder.
      </Person>
    </div>
  );
};

export default App;

// state = {
//   persons: [
//     { personname: 'Archie', age: 30},
//     { personname: 'Barker', age: 31},
//     { personname: 'Cedric', age: 32}
//   ]
// }

