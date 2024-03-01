import { checkGuess } from '../../game-helpers';
import { range, sample } from '../../utils';
import {
    LETTERS,
    LETTER_DICTIONARY,
    NUM_OF_GUESSES_ALLOWED,
} from '../../constants';
import { WORDS } from '../../data';
import Banner from '../Banner/Banner';
import GameBoard from '../GameBoard';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';
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
    const [keyboard, setKeyboard] = useState(() => LETTERS);

    const handleUpdateKeyboard = (wordList) => {
        const newKeyboard = [...keyboard];
        wordList.forEach(({ letter, status }) => {
            const index = LETTER_DICTIONARY[letter];
            newKeyboard[index].status = status;
        });
        setKeyboard(newKeyboard);
    };

    const handleSubmitGuess = (guess) => {
        const newGuessList = [...guessList];
        newGuessList[numGuesses].guess = guess;
        setGuessList(newGuessList);
        setNumGuesses(numGuesses + 1);

        handleUpdateKeyboard(checkGuess(guess, answer));

        const isWinner = guess === answer;
        const isGameOver =
            numGuesses + 1 === NUM_OF_GUESSES_ALLOWED || isWinner;

        if (isGameOver) setGameFinished({ isGameOver, isWinner });
    };

    const resetGame = () => {
        setAnswer(sample(WORDS));
        setGuessList(() => {
            const list = range(0, NUM_OF_GUESSES_ALLOWED, 1);
            return list.map(() => ({ guess: '', id: crypto.randomUUID() }));
        });
        setGameFinished({ isGameOver: false, isWinner: false });
        setNumGuesses(0);
        setKeyboard(() => {
            const newKeyboard = keyboard.map((key) => ({ ...key, status: '' }));
            return newKeyboard;
        });
    };

    return (
        <>
            <GameBoard
                guessList={guessList}
                answer={answer}
                handleUpdateKeyboard={handleUpdateKeyboard}
            />
            <GuessInput
                handleSubmitGuess={handleSubmitGuess}
                isGameOver={gameFinished.isGameOver}
            />
            <Keyboard keyboard={keyboard} />
            {gameFinished.isGameOver && (
                <Banner
                    isWinner={gameFinished.isWinner}
                    numGuesses={numGuesses}
                    answer={answer}
                    resetGame={resetGame}
                />
            )}
        </>
    );
}

export default Game;
