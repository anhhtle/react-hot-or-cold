import React from 'react';

export default class GuessForm extends React.Component {
    
    onGuess(event){
        event.preventDefault();
        if(this.props.onGuess){
            const guess = this.guessInput.value;
            this.props.onGuess(guess);
        }
        this.guessInput.value = '';
    };

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <input type="number" placeholder="Enter your guess" maxLength="3" autoComplete="off" ref={input => this.guessInput = input} required/>
                <button>Guess</button>
            </form>
        );
    }
};