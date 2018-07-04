import React, { Component } from 'react';
class PersonClass extends Component{
    
render(){
    return(
        //<p>This is an example of Class based Component </p>
        <div>
        { <p onClick={this.props.click}>I am a Male and I am {this.props.name} I am {this.props.age} years old! </p> }
        <p> {this.props.children}</p>
        <input type ="text" onChange={this.props.change} value = {this.props.name}/>
        </div>
    );
        }
}

export default PersonClass;