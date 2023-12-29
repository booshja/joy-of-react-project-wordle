import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess, hasMoreGuesses }) {
    const [guess, setGuess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!hasMoreGuesses) {
            alert("You've run out of guesses, sorry!");
            setGuess('');
            return;
        }

        console.log(guess);
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
