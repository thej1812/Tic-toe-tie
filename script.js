// Countdown Timer
function updateCountdown() {
    const targetDate = new Date("February 14, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "💘 Happy Valentine's Day! 💘";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

/* Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate floating hearts every 500ms
setInterval(createHeart, 500);
*/