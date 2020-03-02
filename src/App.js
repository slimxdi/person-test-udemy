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

  const switchNameHandler = () => {
    setPersonState(
      {
      persons: [
          { personname: 'PsuedoArchie', age: 60},
          { personname: 'PsuedoBarker', age: 61},
          { personname: 'PsuedoCedric', age: 62}
        ]
      }
    )
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person personname={personState.persons[0].personname} age={personState.persons[0].age}></Person>
      <Person personname={personState.persons[1].personname} age={personState.persons[1].age}>I like turtles.</Person>
      <Person personname={personState.persons[2].personname} age={personState.persons[2].age}>I like broccoli corn chowder.</Person>
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

