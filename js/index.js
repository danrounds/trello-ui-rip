require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

const lists = [`list title 1`, `list title 2`, `list title 3`];

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board title="Here goes a title"
        lists={lists}/>, document.getElementById('app'));
});
