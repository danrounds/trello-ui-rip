import React from 'react';

export default function Card(props) {
    return (
        <div className="card"><a href="#">
            <p className="card-text">{props.text}</p>
        </a></div>
    );
}
