import React, { Component } from 'react';
import './App.css';
import PersonClass from './Person/PersonClass'

class App extends Component {
  state = {
    persons: [
        {name :'Varun',age:'23'},
        {name :'Ragu',age:'23'},
        {name :'Avinash',age:'24'}
    ],
    showDetails : false
}

  switchNameHandler = (newName) => {
    //console.log('Was Clicked');
    
    this.setState (    //We should not use this.state
    {    persons: [
  {name : newName ,age:'23'}, // WE SHOULD NOT PUT COMMA WHILE PASSING NAME
  {name :'Ragu',age:'23'},
  {name :'Avinash Ramesh',age:'24'}
]
    }

    )
  }
 
  nameChangeHandler = (event) =>{

    this.setState (    //We should not use this.state
      {    persons: [
    {name :'Varun' ,age:'23'}, // WE SHOULD NOT PUT COMMA WHILE PASSING NAME
    {name : event.target.value,age:'23'}, // How to Dynamically Update the Content The event should have target and it's corresponding value
    {name :'Avinash Ramesh',age:'25'}
  ]
      }
  
      )
  }
  togglePersonHandler = () =>{
    const doesShow = this.state.showDetails;
    this.setState ({showDetails: !doesShow});

  }
  render() {   //In JavaScript We should write in braces
    const style ={
      background : 'white',
      font : 'inherit',
      cursor : 'pointer',
      border : '1px solid blue ',
      padding : '8px'
    };

    let persons = null;           //Used for Conditional Operator
    if (this.state.showDetails) 
    {
        persons =(
        <div>  
        {
          this.state.persons.map(person => { //This is best method for Javascript Array   Map is the function to Convert Array in Vanilaa JavaScript ES6  person Element map 
            return <PersonClass
            name = {person.name}
            age = {person.age}
            /> 
          })
        }        
       </div>
      );
    }
    return (
      <div className="App">
       <h1> Hi, I am React App </h1>
       <p> This is my first Site in React </p>
      <button 
      style = {style}  //Below Syntax is If else Statment using ternary operator in react !!Remember Curely braces is for injecting jsx code in JS 
      onClick ={this.togglePersonHandler}>Toggle button</button>    
      {persons}
       </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am React App Does it work'));
  }
}

export default App;
