import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answer: Math.round(Math.random() * 100),
            guesses: [],
            feedback: 'Make your guess!'
        };
    } // end constructor

    newGame(){
        this.setState({
            answer: Math.round(Math.random() * 100),
            guesses: [],
            feedback: 'Make your guess!'
        });
    };

    guess(guess){

        const dif = Math.abs(this.state.answer - guess);
        let feedback;

        if(dif > 25)
            feedback = 'Cold'
        
        else if(dif >= 20)
            feedback = 'Warm'

        else if(dif >= 15)
            feedback = 'Warmer'

        else if(dif >= 10)
            feedback = 'Hot'    

        else if(dif >= 1)
            feedback = 'Really hot'

        else if(dif === 0)
            feedback = 'You got it!'

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    };


    render() {
        return (
            <div className="Parent">
                <Header newGame={() => this.newGame()}/>
                <GuessSection feedback={this.state.feedback} onGuess={guess => this.guess(guess)}/>
                <GuessCount guesses={this.state.guesses.length}/>
                <GuessHistory guesses={this.state.guesses}/>
            </div>
        );
    }; // end render
}; // end export