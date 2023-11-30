const keyboardContainer = document.getElementById('keyboard-container');
const wordInput = document.getElementById('word-input');
const savedWordsContainer = document.getElementById('saved-words');

const keyboardLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

let savedWords = [];

keyboardLetters.forEach(letter => {
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => appendLetter(letter));
    keyboardContainer.appendChild(button);
});

function appendLetter(letter) {
    wordInput.value += letter;
}

function saveWord() {
    const word = wordInput.value;
    if (word !== '') {
        savedWords.push(word);
        displaySavedWords();
        wordInput.value = '';
    }
}

function displaySavedWords() {
    savedWordsContainer.innerHTML = '<strong>Palavras Salvas:</strong>';
    savedWords.forEach(savedWord => {
        const p = document.createElement('p');
        p.textContent = savedWord;
        savedWordsContainer.appendChild(p);
    });
}

function deleteLastLetter() {
    const currentWord = wordInput.value;
    wordInput.value = currentWord.slice(0, -1);
}

document.getElementById('save-button').addEventListener('click', saveWord);
document.getElementById('backspace-button').addEventListener('click', deleteLastLetter);