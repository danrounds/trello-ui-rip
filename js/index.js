require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

const listTitles = [`list title 1`, `list title 2`, `list title 3`];

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board boardTitle="Here goes a title"
        listTitles={listTitles}/>, document.getElementById('app'));
});
