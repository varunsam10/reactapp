import React, { Component } from 'react';
import './Person.css';
import Radium, { StyleRoot } from 'radium';
class PersonClass extends Component{
    
render(){

    const style = {
        '@media (min-width: 450px)':{
            width: '450px'
        }
    }


    return(
        //<p>This is an example of Class based Component </p>
        <StyleRoot>
        <div className ="Person" style={style}>
        { <p onClick={this.props.click}>I am a Male and I am {this.props.name} I am {this.props.age} years old! </p> }
        <p> {this.props.children}</p>
        <input type ="text" onChange={this.props.change} value = {this.props.name}/>
        </div>
        </StyleRoot>
    );
        }
}

export default Radium (PersonClass);