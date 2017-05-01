import React from 'react';
import GuessForm from './guess-form';

export default function GuessSection(props) {
    return (
        <section>
            <h3>{props.feedback}</h3>
            <GuessForm onGuess={props.onGuess}/>
        </section>
    );
};