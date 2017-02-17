import React from 'react';
import List from './list';

export default function Board() {
    const board = [];
    for (let i=0; i<3; i++) {
        board.push(<List />);
    }
    return (
            <div className="board">
            <h2 className="board-title">Title goes here</h2>
              {board}
            </div>
    );
}
