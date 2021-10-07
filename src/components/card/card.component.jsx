import React from 'react';
import './card.style.css';

const Card = ({user}) => (
    <div className="card-container">
        <img src={`https://robohash.org/${user.id}?set=set2`} alt=""/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>
);

export default Card;