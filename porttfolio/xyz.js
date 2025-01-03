const textElements = document.getElementsByClassName('text'); // Corrected method name to getElementsByClassName
const words = ['Hello!', 'Neel', 'Doshi', 'Computer Engineer'];

let index = 0;

function displayWords() {
  if (index < words.length) {
    const word = words[index];
    displayLetters(word, 0, textElements[index]); // Passing the current text element
    index++;
  }
}

function displayLetters(word, letterIndex, textElement) { // Adding textElement parameter
  if (letterIndex < word.length) {
    textElement.textContent += word[letterIndex];
    setTimeout(() => {
      displayLetters(word, letterIndex + 1, textElement); // Passing the current text element
    }, 100); // Change the delay (in milliseconds) here
  } else {
    textElement.textContent += ' '; // Add space between words
    displayWords(); // Move to the next word
  }
}

displayWords();