import { range } from '../../utils';
import React from 'react';

function Guess({ wordList, isEmpty }) {
    return (
        <p className="guess">
            {isEmpty ? (
                <>
                    {range(0, 5, 1).map((_) => (
                        <span className="cell" key={Math.random()}></span>
                    ))}
                </>
            ) : (
                <>
                    {wordList.map(({ letter, status }) => (
                        <span className={`cell ${status}`} key={Math.random()}>
                            {letter}
                        </span>
                    ))}
                </>
            )}
        </p>
    );
}

export default Guess;
