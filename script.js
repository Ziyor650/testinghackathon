body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #282c34;
  color: white;
  margin: 0;
  padding: 0;
}

.game-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e2f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

h1 {
  font-size: 2.5rem;
  color: #61dafb;
}

#question {
  margin: 20px 0;
  font-size: 1.2rem;
  color: #ddd;
}

.items-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.item {
  flex: 1;
  text-align: center;
  padding: 15px;
  border: 2px solid #61dafb;
  border-radius: 10px;
  background-color: #3b3b5c;
  max-width: 300px;
}

.item img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 10px 0;
  border-radius: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px; /* Adds spacing between buttons */
  margin-top: 10px; /* Adds spacing between image and buttons */
}

.choice-btn {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #61dafb;
  color: #282c34;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.choice-btn:hover {
  background-color: #21a1f1;
}

#score {
  font-size: 1.1rem;
  color: #ddd;
}

.retry-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.retry-button:hover {
  background-color: #ff4b4b;
}

