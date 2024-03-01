import { checkGuess } from '../../game-helpers';
import Guess from '../Guess';
import React from 'react';

function GameBoard({ guessList, answer }) {
    return (
        <>
            <div className="guess-results">
                {guessList.map(({ guess, id }) => {
                    let wordList;
                    if (guess !== '') wordList = checkGuess(guess, answer);

                    return (
                        <Guess
                            wordList={wordList}
                            isEmpty={guess === ''}
                            key={id}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default GameBoard;
