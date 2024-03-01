import React from 'react';

function Keyboard({ keyboard }) {
    return (
        <div className="keyboard">
            <div className="keyboard-row">
                {keyboard.slice(0, 10).map(({ letter, status }) => (
                    <span className={`key ${status}`} key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
            <div className="keyboard-row">
                {keyboard.slice(10, 19).map(({ letter, status }) => (
                    <span className={`key ${status}`} key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
            <div className="keyboard-row">
                {keyboard.slice(19, 26).map(({ letter, status }) => (
                    <span className={`key ${status}`} key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Keyboard;
