import React from 'react';
import '../App.css';
import axios from "axios"
import Personcard from './personcard'

class App extends React.Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({ persons: res.data });
        })
    }
    PersonList
    render() {
        return (
            <div className="listperson">
                {this.state.persons.map(el => <Personcard person={el} />)}
            </div>
        )
    }
}
export default App;
