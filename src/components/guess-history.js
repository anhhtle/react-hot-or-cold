import React from 'react';

export default function GuessHistory(props){

    let guesses = props.guesses.map((guess, index) => 
        <li key={index}>{guess}</li>
    );

    return (
        <ul>{guesses}</ul>
    );
};