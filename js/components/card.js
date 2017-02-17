import React from 'react';

export default function Card() {
    const text = 'This is a card';
    return (
            <div className="card"><a href="#">
              <p className="card-text">{text}</p>
            </a></div>
    );
}
