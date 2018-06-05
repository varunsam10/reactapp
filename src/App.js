import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import PersonClass from './Person/PersonClass'

class App extends Component {
  state = {
    persons: [
        {name :'Varun',age:'23'},
        {name :'Ragu',age:'23'},
        {name :'Avinash',age:'24'}
    ]
}

  switchNameHandler = () => {
    //console.log('Was Clicked');
    this.setState (    //We should not use this.state
    {    persons: [
  {name :'Varun Sampath',age:'23'},
  {name :'Ragu',age:'23'},
  {name :'Avinash Ramesh',age:'24'}
]
    }

    )
  }

  render() {
    return (
      <div className="App">
       <h1> Hi, I am React App </h1>
       <p> This is my first Site in React </p>
       <Person name="Varun" age="24"/>  
       <button onClick ={this.switchNameHandler}>Switch button</button>
       <PersonClass name={this.state.persons[0].name} age={this.state.persons[0].age}/>  
       <PersonClass name={this.state.persons[1].name} age={this.state.persons[1].age}/>  
       <PersonClass name={this.state.persons[2].name} age={this.state.persons[2].age}/>  
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am React App Does it work'));
  }
}

export default App;
