import React from 'react';
import Card from "../card/card.component";
import './card-list.style.css';

const CardList = (props) => (
    <div className="card-list">
        { props.users.map(user => <Card key={user.id} user={user} />) }
    </div>
);

export default CardList;