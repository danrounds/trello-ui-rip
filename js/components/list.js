import React from 'react';
import Card from './card';

export default function List() {
    const list = [];
    for (let i=0; i<3; i++) {
        list.push(<Card />);
    }
    return(
            <div className="list">
              <p className="title-text">Title</p>
              {list}
              <p><a href="#" className="add-a-text">Add a card...</a></p>
            </div>
    );
}

