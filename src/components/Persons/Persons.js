import React , { Component }from 'react';

import Person from './Person/Person';

class persons extends Component { 
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor',props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside ComponentWillMount',this.props)
  }

  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE person.js] Inside ShouldComponentUpdate');
    return nextProps.persons !== this.props.persons;
  }

render() {
    console.log('[Person.js] Inside Person Render');
    return this.props.persons.map( ( person, index ) => {
      return <Person
        click={() => this.props.clicked( index )}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={( event ) => this.props.changed( event, person.id )} />
    } );
      
  }
}

export default persons;