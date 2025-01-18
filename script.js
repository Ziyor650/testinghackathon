const data = [
  { item: "City A", value: 500000, image: "Images/DCPE.png" },
  { item: "City B", value: 1200000, image: "Images/DEEE.png" },
  { item: "City C", value: 750000, image: "images/city-c.png" },
  { item: "City D", value: 250000, image: "images/city-d.png" },
];

let currentItem = 0;
let score = 0;

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retry-btn");

function updateItems() {
  // Get the current item and the next item
  const itemA = data[currentItem];
  const itemB = data[(currentItem + 1) % data.length];

  // Set the values in the HTML
  document.getElementById("item1-name").textContent = `Item 1: ${itemA.item}`;
  document.getElementById("item1-value").textContent = `Value: ${itemA.value.toLocaleString()}`;
  document.getElementById("item1-img").src = itemA.image;
  document.getElementById("item2-name").textContent = `Item 2: ${itemB.item}`;
  document.getElementById("item2-img").src = itemB.image;

  // Hide item1's value after the first round
  if (currentItem > 0) {
    document.getElementById("item1-value").style.visibility = "hidden";
  } else {
    document.getElementById("item1-value").style.visibility = "visible";
  }
}

function handleChoice(isHigher) {
  const itemA = data[currentItem];
  const itemB = data[(currentItem + 1) % data.length];

  // Determine if the choice is correct
  if ((isHigher && itemB.value > itemA.value) || (!isHigher && itemB.value < itemA.value)) {
    score++;
    result.textContent = "Correct!";
  } else {
    result.textContent = "Incorrect!";
    document.getElementById("higher-btn").disabled = true;
    document.getElementById("lower-btn").disabled = true;
    retryBtn.style.display = "block";
    return;
  }

  // Update the score
  scoreDisplay.textContent = `Score: ${score}`;

  // Move to the next item
  currentItem = (currentItem + 1) % data.length;
  updateItems();
}

function resetGame() {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  result.textContent = "";
  currentItem = 0;
  retryBtn.style.display = "none";
  document.getElementById("higher-btn").disabled = false;
  document.getElementById("lower-btn").disabled = false;
  updateItems();
}

document.getElementById("higher-btn").addEventListener("click", function () {
  handleChoice(true);
});

document.getElementById("lower-btn").addEventListener("click", function () {
  handleChoice(false);
});

retryBtn.addEventListener("click", function () {
  resetGame();
});

// Initialize game
updateItems();
