window.addEventListener('load', init);

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const seconds = document.querySelector('#seconds');
const message = document.querySelector('#message');

const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

const currentLevel = levels.medium;

seconds.textContent = currentLevel;

let time = currentLevel;
let score = 0;
let wordCount = 0;
let isPlaying;

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'monster',
    'gravitation',
    'table',
    'grapefruit',
    'watermelon',
    'strawberry',
    'orange',
    'piano',
    'work',
    'school',
    'nightmare',
    'cactus',
    'goal',
    'goat',
    'lipstick',
    'pen'
];

function init() {
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    score = score + currentWord.textContent.length;
    showWord(words);
    wordInput.value = '';
    wordCount ++;
  }

  if(score < 0) {
    scoreDisplay.textContent = 0;
  } else {
    scoreDisplay.textContent = score;
  }
}

function matchWords() {
  if(wordInput.value === currentWord.textContent) {
    message.style.color = "#69e470";
    message.style.fontSize = "50px";
    if(wordCount !== -1){
      message.textContent = 'Correct :) x'+ (wordCount+1);
    } else {
      message.textContent = 'Game begins!';
    }
    return true;
  } else {
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.textContent = words[randIndex];
}

function countdown() {
  if(time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.textContent = time;
}

function checkStatus() {
  if(!isPlaying && time === 0) {
    message.style.color = "#e46969";
    message.style.fontSize = "35px";
    message.innerHTML = 'Game over :( <br> Type the word correctly to play again!';
    wordCount = -1;
    score = -currentWord.textContent.length;
  }
}