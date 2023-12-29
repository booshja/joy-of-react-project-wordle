import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess }) {
    const [guess, setGuess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitGuess(guess);
        setGuess('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
                maxLength={5}
                pattern="^[A-Z]{5}$"
                autoCapitalize="characters"
                required
            />
        </form>
    );
}

export default GuessInput;
