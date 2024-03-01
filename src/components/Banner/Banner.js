import React from 'react';

function Banner({ numGuesses, answer, isWinner, resetGame }) {
    return (
        <div className={`banner ${isWinner ? 'happy' : 'sad'}`}>
            <p>
                {isWinner ? (
                    <>
                        <strong>Congratulations!</strong> 🎉 You got it in{' '}
                        <strong>{numGuesses} guesses</strong>!
                    </>
                ) : (
                    <>
                        Sorry, the correct answer is <strong>{answer}</strong>.
                    </>
                )}
            </p>
            <button onClick={resetGame} className="reset-button">
                Reset game
            </button>
        </div>
    );
}

export default Banner;
