import React from 'react';
import Card from './card';

export default function List(props) {
    return (
        <div className="list">
          <p className="title-text">{props.title}</p>
          {props.list}    {/* this is our actual list */}
          <form className="add-a-card">
            <input onChange={props.onAddInputChanged} className="add-a-text" type="text" placeholder="add a card"/>
            <input onClick={props.onAddSubmit} className="add-a-button" type="submit" value="add"/>
          </form>
        </div>
    );

}
