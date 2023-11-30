const keyboardContainer = document.getElementById('keyboard-container');
const wordInput = document.getElementById('word-input');

const keyboardLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

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
    console.log('Palavra salva:', word);
    wordInput.value = '';
}

document.getElementById('save-button').addEventListener('click', saveWord);