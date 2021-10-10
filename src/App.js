import React, {Component} from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Title from "./components/title/title.component";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.start = new Date().getTime();
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('users')) {
            this.setState({users: JSON.parse(localStorage.getItem('users'))});
            let end = new Date().getTime();
            let time = end - this.start;
        } else {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(result => result.json())
                .then(users => {
                    console.log(users);
                    localStorage.setItem('users', JSON.stringify(users));
                    this.setState({users: users});
                    let end = new Date().getTime();
                    let time = end - this.start;
                })
        }

    }

    render() {
        const {users, searchField} = this.state;
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <Title />
                <SearchBox
                    placeholder="Search monsters..."
                    handleChange={(e) => this.setState({searchField: e.target.value})}
                />
                <CardList users={filteredUsers}/>
            </div>
        );
    }
}

export default App;