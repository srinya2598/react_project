import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            {id: 'abc', name: 'Max', age: 28},
            {id: 'def', name: 'Mannu', age: 29},
            {id: 'hgi', name: 'Steph', age: 26}
        ],
        showPersons: false
    }
//
//     switchNameHandler = (newName) => {
// //DONT DO THIS: this.state.persons[0].name="abc"; as it will try to mutate the state directly
//         this.setState({
//             persons: [
//                 {name: newName, age: 28},
//                 {name: 'Mannu', age: 30},
//                 {name: 'Steph', age: 26}
//             ]
//         })
//
//     }
    nameChangesHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

// const person =  Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        let persons = null;
        if (this.state.showPersons) {

            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary><Person
                            key={person.id}
                            name={person.name} age={person.age}
                            changed={(event) => {
                                this.nameChangesHandler(event, person.id)
                            }}
                            click={() => this.deletePersonHandler(index)}/></ErrorBoundary>
                    })}
                    {/*<Person name={this.state.persons[1].name} age={this.state.persons[1].age}*/}
                    {/*changed={this.nameChangesHandler}*/}
                    {/*click={this.switchNameHandler.bind(this, 'Max!')}>*/}
                    {/*hobbies: racing</Person>*/}
                    {/*<Person name="Steph" age="26"/>*/}
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }
        //let classes =['red','bold'].join(' ');
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi, Im a React App </h1>
                    <p className={classes.join('  ')}>this is realllyy working!</p>
                    {/*<button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>*/}
                    <button onClick={this.togglePersonsHandler}
                            style={style}>show Names
                    </button>
                    {persons}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);

