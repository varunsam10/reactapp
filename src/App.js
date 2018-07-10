import React, { Component } from 'react';
import './App.css';
import PersonClass from './Person/PersonClass'
import Radium ,{ StyleRoot } from 'radium';   // Added for hover function in button

class App extends Component {
  state = {
    persons: [
        {id :"qqqqqq", name :'Varun',age:'23'},
        {id :"wwwwww",name :'Ragu',age:'23'},
        {id :"eeeeee",name :'Avinash',age:'24'}
    ],
    showDetails : false
}

  deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons;  // Didn't assign new value it's get holding an pointer 
      const persons = [...this.state.persons]; // Spread Operator 3 dots in ES6 spreads out each element in this array 
      persons.splice(personIndex,1); //Changing the element where it is ponting
      this.setState({persons:persons})  //Set persons to persons constant

  }
 
  nameChangeHandler = (event , id) =>{

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;


    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    //const person = Object.assign({},this.state.persons[personIndex]); Alternate Way to assign object 

    this.setState (    {   person: persons }         ) ;         //We should not use this.state
     
  }
  togglePersonHandler = () =>{
    const doesShow = this.state.showDetails;
    this.setState ({showDetails: !doesShow});

  }
  render() {   //In JavaScript We should write in braces
    const style ={
      background : 'green',
      color : 'white',
      font : 'inherit',
      cursor : 'pointer',
      border : '1px solid blue ',
      padding : '8px',
      ':hover':{
        backgroundColor :"lightgreen",
        color:'black'
      } // We can create javascript property as Strings 
    };

    let persons = null;           //Used for Conditional Operator
    if (this.state.showDetails) 
    {
        persons =(
        <div>  
        {
          this.state.persons.map((person,index)=> { //This is best method for Javascript Array   Map is the function to Convert Array in Vanilaa JavaScript ES6  person Element map   
            return <PersonClass
            name = {person.name}
            age = {person.age}
            key = {person.id}
            change = {(event)=> this.nameChangeHandler(event , person.id)}
            click = {() => this.deletePersonHandler(index)} // We can use arrow function instead of bind indes of delete handle 
            /> 
          })
        }        
       </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {   //Should not leave space between style and hover
        backgroundColor :"salmon",
        color:'black'
      }
    }
    else
    {
      style.backgroundColor = 'green';
    }

    //let classes = ['red','bold'].join(' '); // Valid CSS Class list We should Space in between colons in join

    let classes = []; // We can use let instead of const
    if (this.state.persons.length <= 2)
    {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1)
    {
      classes.push('bold'); // classes = ['red' , 'bold']
    }
    return (  //classes.join is written beacause now classes is an array we need to pass an string
      <StyleRoot>
      <div className="App">
       <h1> Hi, I am React App </h1>
       <p className ={classes.join(' ')}> This is my first Site in React </p> 
      <button 
      style = {style}  //Below Syntax is If else Statment using ternary operator in react !!Remember Curely braces is for injecting jsx code in JS 
      onClick ={this.togglePersonHandler}>Toggle button</button>    
      {persons}
       </div>
       </StyleRoot>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I am React App Does it work'));
  }
}

export default Radium (App); // Higher Order Component Component Wrapping our component for extra functionalities 
