export const NUM_OF_GUESSES_ALLOWED = 6;

const letterArray = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

export const LETTERS = letterArray.map((letter) => ({
    letter,
    status: '',
}));

export const LETTER_DICTIONARY = {
    Q: 0,
    W: 1,
    E: 2,
    R: 3,
    T: 4,
    Y: 5,
    U: 6,
    I: 7,
    O: 8,
    P: 9,
    A: 10,
    S: 11,
    D: 12,
    F: 13,
    G: 14,
    H: 15,
    J: 16,
    K: 17,
    L: 18,
    Z: 19,
    X: 20,
    C: 21,
    V: 22,
    B: 23,
    N: 24,
    M: 25,
};
