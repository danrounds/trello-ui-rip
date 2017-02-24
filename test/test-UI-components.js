import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const  should = chai.should();

import Card from '../js/components/card';
import ListContainer from '../js/components/list-container';
import Board from '../js/components/board';

describe('Card component', function() {
    it('Should render with the right text', function() {
        const text = 'sample text';

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

        const cardLink = result.props.children;
        const cardText = cardLink.props.children;
        cardLink.type.should.equal('a');
        cardText.type.should.equal('p');
        cardText.props.children.should.equal(text);
    });
});

describe ('List (container) component', function() {
    it('Should render with correct title and "card" values', function() {
        const title = 'A Title';
        const cards = ['here\'s a sample', 'list of', 'card values'];

        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title} cards={cards} />);
        const result = renderer.getRenderOutput();

        result.props.title.should.equal(title);

        const renderedCards = result.props.list;
        for (let i in renderedCards) {
            renderedCards[i].props.text.should.equal(cards[i]);
        }
    });
});

describe('Board component', function() {
    it('Should render with the correct title and correct list titles', function() {
        const title = 'Board Title';
        const listTitles = ['List Title 1', 'List Title 2'];

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board boardTitle={title} listTitles={listTitles} />);
        const result = renderer.getRenderOutput();

        console.log(result.props.children[1]);

        result.props.children[0].props.className.should.equal('board-title');
        result.props.children[0].props.children.should.equal(title);

        result.props.children[1][0].props.title.should.equal(listTitles[0]);
    });
});
