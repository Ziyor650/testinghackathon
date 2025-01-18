// Diplomas and their popularity values
const diplomas = [
  { name: "Diploma 1", popularity: 800000, image: "Images/DCPE.png" },
  { name: "Diploma 2", popularity: 1000000, image: "Images/DEEE.png" },
  { name: "Diploma 3", popularity: 500000, image: "Images/DAE.png" },
  { name: "Diploma 4", popularity: 100000, image: "Images/DEB.png" },
];

// DOM Elements
const item1Name = document.getElementById("item1-name");
const item1Popularity = document.getElementById("item1-popularity");
const item1Img = document.getElementById("item1-img");
const item2Name = document.getElementById("item2-name");
const item2Popularity = document.getElementById("item2-popularity");
const item2Img = document.getElementById("item2-img");
const higherBtn = document.getElementById("higher-btn");
const lowerBtn = document.getElementById("lower-btn");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");

// Variables
let score = 0;
let currentIndex = 0;
let nextIndex = 1;

// Initialize the game
function initGame() {
  score = 0;
  currentIndex = 0;
  nextIndex = 1;
  updateItems();
  scoreDisplay.textContent = `Score: ${score}`;
  retryBtn.style.display = "none";
}

// Update diplomas on the screen
function updateItems() {
  const currentDiploma = diplomas[currentIndex];
  const nextDiploma = diplomas[nextIndex];

  item1Name.textContent = currentDiploma.name;
  item1Popularity.textContent = `Popularity: ${currentDiploma.popularity}`;
  item1Img.src = currentDiploma.image;

  item2Name.textContent = nextDiploma.name;
  item2Img.src = nextDiploma.image;
  item2Popularity.textContent = `Popularity: ${nextDiploma.popularity}`;
  item2Popularity.style.display = "none";
}

// Check the user's choice
function checkChoice(isHigher) {
  const currentDiploma = diplomas[currentIndex];
  const nextDiploma = diplomas[nextIndex];

  const correct = isHigher
    ? nextDiploma.popularity > currentDiploma.popularity
    : nextDiploma.popularity < currentDiploma.popularity;

  if (correct) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % diplomas.length;
    updateItems();
  } else {
    endGame();
  }
}

// End the game
function endGame() {
  alert(`Game over! Your final score is ${score}.`);
  retryBtn.style.display = "block";
}

// Event Listeners
higherBtn.addEventListener("click", () => checkChoice(true));
lowerBtn.addEventListener("click", () => checkChoice(false));
retryBtn.addEventListener("click", initGame);

// Start the game
initGame();
