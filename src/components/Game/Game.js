import React, { useState } from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GameBoard from '../GameBoard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guessList, setGuessList] = useState(() => {
        const list = range(0, NUM_OF_GUESSES_ALLOWED, 1);
        return list.map(() => ({ guess: '     ', id: crypto.randomUUID() }));
    });
    const [numGuesses, setNumGuesses] = useState(0);

    const hasMoreGuesses = numGuesses < NUM_OF_GUESSES_ALLOWED;

    const handleSubmitGuess = (guess) => {
        const newGuess = { guess, id: crypto.randomUUID() };
        const newGuessList = [...guessList];
        newGuessList[numGuesses] = newGuess;
        setGuessList(newGuessList);
        setNumGuesses(numGuesses + 1);
    };

    return (
        <>
            <GameBoard guessList={guessList} />
            <GuessInput
                handleSubmitGuess={handleSubmitGuess}
                hasMoreGuesses={hasMoreGuesses}
            />
        </>
    );
}

export default Game;
