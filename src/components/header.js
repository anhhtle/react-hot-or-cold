import React from 'react';

export default class Header extends React.Component {

    newGame(event){
        event.preventDefault();
        if(this.props.newGame)
            this.props.newGame();
    };

    render(){
        return (
            <div className="header">
                <div>What?</div>
                <a href="#" onClick={e => this.newGame(e)}>+New game</a>
                <h1>Hot or Cold</h1>
            </div>
        );
    }
}; // end export