# dice-challenge
# 🎲 Dice Challenge

A simple web-based Dice Game built using **HTML, CSS, and JavaScript**.
The page simulates rolling two dice and declares the winner between Player 1 and Player 2.

---

## 🚀 Features

* Generates **random dice numbers** using JavaScript
* Updates dice images dynamically
* Displays the **winner of the game**
* Simple and interactive UI

---

## 🛠 Technologies Used

* **HTML** – Structure of the webpage
* **CSS** – Styling the page
* **JavaScript** – Game logic and DOM manipulation

---

## 📂 Project Structure

```
Dice-Challenge
│
├── index.html
├── style.css
├── script.js
└── images
     ├── dice1.png
     ├── dice2.png
     ├── dice3.png
     ├── dice4.png
     ├── dice5.png
     └── dice6.png
```

---

## ⚙ How It Works

1. When the page loads, JavaScript generates **two random numbers (1–6)**.
2. Each number corresponds to a **dice image**.
3. The images are updated dynamically using **DOM manipulation**.
4. The player with the **higher number wins**.
5. If both numbers are the same, the result is a **draw**.

---

## 💻 Example JavaScript Logic

```javascript
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "./images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
```

---

## 📸 Demo

Player 1 wins if their dice number is greater than Player 2's number.

---

## 📌 Future Improvements

* Add **button to roll dice**
* Add **score tracking**
* Improve UI design
* Add animations for dice rolling

---

## 👩‍💻 Author

Developed by **Harini**
