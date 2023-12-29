import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import Banner from '../Banner/Banner';
import GuessInput from '../GuessInput';
import GameBoard from '../GameBoard';
import React, { useState } from 'react';

function Game() {
    const [answer, setAnswer] = useState(() => sample(WORDS));
    const [guessList, setGuessList] = useState(() => {
        const list = range(0, NUM_OF_GUESSES_ALLOWED, 1);
        return list.map(() => ({ guess: '', id: crypto.randomUUID() }));
    });
    const [numGuesses, setNumGuesses] = useState(0);
    const [gameFinished, setGameFinished] = useState({
        isGameOver: false,
        isWinner: false,
    });

    const handleSubmitGuess = (guess) => {
        if (gameFinished.isGameOver) return;

        const newGuessList = [...guessList];
        newGuessList[numGuesses].guess = guess;
        setGuessList(newGuessList);
        setNumGuesses(numGuesses + 1);

        const isWinner = guess === answer;
        const isGameOver =
            numGuesses + 1 === NUM_OF_GUESSES_ALLOWED || isWinner;

        if (isGameOver) setGameFinished({ isGameOver, isWinner });
    };

    return (
        <>
            <GameBoard guessList={guessList} answer={answer} />
            <GuessInput handleSubmitGuess={handleSubmitGuess} />
            {gameFinished.isGameOver && (
                <Banner
                    isWinner={gameFinished.isWinner}
                    numGuesses={numGuesses}
                    answer={answer}
                />
            )}
        </>
    );
}

export default Game;
