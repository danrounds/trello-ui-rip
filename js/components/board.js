import React from 'react';
import ListContainer from './list-container';

const cards = [['This is a card', 'Here goes some text', 'and here is some more'],
               ['Yet more cards', 'you can write arbitrary stuff', 'cards are nice'],
               ['Kind of running out of filler text', 'to write', 'on these cards']];

export default function Board(props) {
    const board = [];
    for (let i in props.lists) {
        board.push(<ListContainer title={props.lists[i]}
                   cards={cards[i]}/>);
    }
    return (
        <div className="board">
          <h2 className="board-title">Title goes here</h2>
          {board}
        </div>
    );
}
