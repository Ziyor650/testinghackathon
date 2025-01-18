const data = [
  { item: "Degree 1", value: 500000, image: "Images/DCPE.png" },
  { item: "Degree 2", value: 1200000, image: "Images/DEEE.png" },
  { item: "Degree 3", value: 750000, image: "images/degree3.png" },
  { item: "Degree 4", value: 250000, image: "images/degree4.png" },
];

let currentItem = 0;
let score = 0;

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const question = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");

function updateItems() {
  const itemA = data[currentItem];
  const itemB = data[(currentItem + 1) % data.length];

  // Update HTML content
  document.getElementById("item1-name").textContent = `${itemA.item}`;
  document.getElementById("item1-value").textContent = `Value: ${itemA.value.toLocaleString()}`;
  document.getElementById("item1-img").src = itemA.image;
  document.getElementById("item2-name").textContent = `${itemB.item}`;
  document.getElementById("item2-img").src = itemB.image;

  // Hide value after the first round
  if (currentItem > 0) {
    document.getElementById("item1-value").style.visibility = "hidden";
  } else {
    document.getElementById("item1-value").style.visibility = "visible";
  }
}

function handleChoice(isHigher) {
  const itemA = data[currentItem];
  const itemB = data[(currentItem + 1) % data.length];

  // Validate choice
  if ((isHigher && itemB.value > itemA.value) || (!isHigher && itemB.value < itemA.value)) {
    score++;
    question.textContent = "Correct!";
  } else {
    question.textContent = "Incorrect!";
    document.querySelectorAll(".choice-btn").forEach((btn) => (btn.disabled = true));
    retryBtn.style.display = "block";
    return;
  }

  // Update score and items
  scoreDisplay.textContent = `Score: ${score}`;
  currentItem = (currentItem + 1) % data.length;
  updateItems();
}

function resetGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  question.textContent = "Is the choice on the left higher or lower?";
  currentItem = 0;
  retryBtn.style.display = "none";
  document.querySelectorAll(".choice-btn").forEach((btn) => (btn.disabled = false));
  updateItems();
}

document.getElementById("higher-btn").addEventListener("click", () => handleChoice(true));
document.getElementById("lower-btn").addEventListener("click", () => handleChoice(false));
retryBtn.addEventListener("click", resetGame);

// Initialize game
updateItems();

