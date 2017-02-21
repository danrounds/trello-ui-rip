import React from 'react';
import Card from './card';

export default function List(props) {
    const list = [];
    // for (let i=0; i<3; i++) {
    // for (let txt of ['This is a card', 'Here go some text', 'and here is some more']) {
    for (let txt of props.cards) {
        list.push(<Card text={txt}/>);
    }
    return(
        <div className="list">
          <p className="title-text">{props.title}</p>
          {list}
          <form className="add-a-card">
            <input className="add-a-text" type="text" placeholder="add a card"/>
            <input className="add-a-button" type="submit" value="add"/>
          </form>
        </div>
    );
}

