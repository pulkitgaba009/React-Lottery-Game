# 🎰 React Lottery Game

A simple lottery number generator built with React. The game generates 3 random digits, and if their sum is exactly 15, the player wins!

---

## 📋 Features

- Random generation of 3 digits (0–9)
- Automatic win/loss check
- Displays the winning ticket clearly
- "Get New Ticket" button to play again
- Built with React functional components and hooks

---

## 🛠 Tech Stack

- React
- JavaScript (ES6+)
- Vite (for development server)
- HTML/CSS

---

## 📁 Project Structure
lottery-game/
├── src/
│ ├── Lottery.jsx # Lottery game logic
│ ├── App.jsx # Main app component
│ └── main.jsx # React DOM rendering
├── public/
│ └── index.html # HTML template
├── package.json
└── README.md

---

## 🧪 Gameplay Logic

When the app loads or the **"Get New Ticket"** button is clicked:

- 🎲 Three random digits are generated (ranging from 0 to 9)
- ➕ Their sum is calculated
- ✅ If the sum equals **15**:
  - The user sees a **"🎉 Congratulations"** message
- ❌ If not:
  - The user is encouraged to **try again**

---

## ✅ Future Improvements

- 🎊 Add animations or confetti on winning
- 🔊 Sound effects for success or failure
- 📈 Track number of tries
- 📊 Add game statistics (e.g., win rate)
- 💾 Store winning history in `localStorage`
