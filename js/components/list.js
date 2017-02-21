import React from 'react';
import Card from './card';

export default class List extends React.Component {
    constructor(props){
        super(props);
        const list = [];
        for (let txt of props.cards) {
            list.push(<Card text={txt}/>);
        }
        this.submittedCardVal = undefined;
        this.list = list;
        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddInputChanged(e) {
        console.log(e.target.value);
        this.submittedCardVal = e.target.value;

    }

    onAddSubmit(e) {
        e.preventDefault();
        console.log(this.submittedCardVal);
    }

    render() {
        return (
            <div className="list">
              <p className="title-text">{this.props.title}</p>
              {this.list}
              <form className="add-a-card">
                <input onChange={this.onAddInputChanged} className="add-a-text" type="text" placeholder="add a card"/>
                <input onClick={this.onAddSubmit} className="add-a-button" type="submit" value="add"/>
              </form>
            </div>
        );
    }
}


// export default function List(props) {
//     const list = [];
//     // for (let i=0; i<3; i++) {
//     // for (let txt of ['This is a card', 'Here go some text', 'and here is some more']) {
//     for (let txt of props.cards) {
//         list.push(<Card text={txt}/>);
//     }
//     return(
//         <div className="list">
//           <p className="title-text">{props.title}</p>
//           {list}
//           <form className="add-a-card">
//             <input className="add-a-text" type="text" placeholder="add a card"/>
//             <input className="add-a-button" type="submit" value="add"/>
//           </form>
//         </div>
//     );
// }

