import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Mannu', age: 29},
            {name: 'Steph', age: 26}
        ]
    }

    switchNameHandler = (newName) => {
//DONT DO THIS: this.state.persons[0].name="abc"; as it will try to mutate the state directly
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'Mannu', age: 30},
                {name: 'Steph', age: 26}
            ]
        })

    }
    nameChangesHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 30},
                {name: 'Steph', age: 26}
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        return (
            <div className="App">
                <h1>Hi, Im a React App </h1>
                <p>this is realllyy working!</p>
                {/*<button onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>*/}
                <button onClick={() => {
                    this.switchNameHandler('Maxmilllinan!!!')
                }}
                        style={style}>Switch Name
                </button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                        changed={this.nameChangesHandler}
                        click={this.switchNameHandler.bind(this, 'Max!')}>
                    hobbies: racing</Person>
                <Person name="Steph" age="26"/>
            </div>
        );
    }
}

export default App;
