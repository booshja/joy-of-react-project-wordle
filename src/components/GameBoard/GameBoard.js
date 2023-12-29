import React from 'react';
import Guess from '../Guess';

function GameBoard({ guessList }) {
    return (
        <>
            <div className="guess-results">
                {guessList.map(({ guess, id }) => (
                    <Guess word={guess} key={id} />
                ))}
            </div>
        </>
    );
}

export default GameBoard;
