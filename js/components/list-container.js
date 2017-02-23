import React from 'react';
import List from './list';
import Card from './card';


// this is the stateful part of our list display
export default class ListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: ListContainer.populateList(props.cards),
            title: props.title,
            currentEntryVal: ''
        };
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    static populateList(cards) {
        const list = [];
        for (let txt of cards) {
            list.push(<Card text={txt} />);
        }
        return list;
    }

    onAddInputChanged(e) {
        console.log(e.target.value);
        this.state.currentEntryVal = e.target.value;
    }

    onAddSubmit(e) {
        e.preventDefault();
        console.log(this.state.currentEntryVal);
        this.state.list.push(<Card text={this.state.currentEntryVal} />);
        console.log(this.state.list);
        this.forceUpdate();
    }

    render() {
        return (
            <List title={this.state.title} list={this.state.list} onAddSubmit={this.onAddSubmit}
                  onAddInputChanged={this.onAddInputChanged} />
        );
    }
}
