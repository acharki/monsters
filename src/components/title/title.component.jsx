import React, {Component} from 'react';
import './title.component.css'

class Title extends Component {
    state = {
        title: 'Monsters Rolodex'
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default Title;