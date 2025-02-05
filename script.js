document.getElementById("start-btn").addEventListener("click", function() {
    let player1 = document.getElementById("player1").value.trim();
    let player2 = document.getElementById("player2").value.trim();

    if (!player1 || !player2) {
        alert("Please enter both names to start the game! 💖");
        return;
    }

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    document.getElementById("p1-name").innerText = player1;
    document.getElementById("p2-name").innerText = player2;

    let p1Score = localStorage.getItem("p1-score") || 0;
    let p2Score = localStorage.getItem("p2-score") || 0;
    document.getElementById("p1-score").innerText = p1Score;
    document.getElementById("p2-score").innerText = p2Score;

    document.querySelector(".entry").style.display = "none";
    document.querySelector(".game-board").style.display = "block";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("reset-btn").style.display = "block";
});

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.querySelectorAll(".cell")[index].innerText = currentPlayer;
        if (checkWinner()) {
            updateScore();
            displayWinner();
            return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    let winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(pattern => {
        let [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function updateScore() {
    let winner = currentPlayer === "X" ? "p1-score" : "p2-score";
    let score = parseInt(localStorage.getItem(winner) || 0) + 1;
    localStorage.setItem(winner, score);
    document.getElementById(winner).innerText = score;
}

function displayWinner() {
    alert(`${currentPlayer} Wins! 💖`);
    createFloatingHearts();
    setTimeout(resetBoard, 1000); // Reset board after 1 sec
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    currentPlayer = "X";
}

function resetGame() {
    localStorage.setItem("p1-score", 0);
    localStorage.setItem("p2-score", 0);
    document.getElementById("p1-score").innerText = "0";
    document.getElementById("p2-score").innerText = "0";
    resetBoard();
}

function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.getElementById("heart-container").appendChild(heart);
    }
}
