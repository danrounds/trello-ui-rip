require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board.js';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
