import Guess from '../Guess';
import React from 'react';

function GameBoard({ guessList, answer }) {
    return (
        <>
            <div className="guess-results">
                {guessList.map(({ guess, id }) => (
                    <Guess
                        word={guess}
                        answer={answer}
                        isEmpty={guess === ''}
                        key={id}
                    />
                ))}
            </div>
        </>
    );
}

export default GameBoard;
