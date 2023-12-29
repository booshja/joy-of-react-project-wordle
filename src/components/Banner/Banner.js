import React from 'react';

function Banner({ numGuesses, answer, isWinner }) {
    return (
        <div className={`banner ${isWinner ? 'happy' : 'sad'}`}>
            <p>
                {isWinner ? (
                    <>
                        <strong>Congratulations!</strong> Got it in{' '}
                        <strong>{numGuesses} guesses</strong>.
                    </>
                ) : (
                    <>
                        Sorry, the correct answer is <strong>{answer}</strong>.
                    </>
                )}
            </p>
        </div>
    );
}

export default Banner;
