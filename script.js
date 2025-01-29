const audio = document.getElementById("loveSong");

function playMusic() {
    if (audio.paused) {
        audio.play().catch(error => console.log("Autoplay prevented: " + error));
    }
}

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "index.html"; // Back to landing page
});

document.getElementById("acceptButton").addEventListener("click", function() {
    alert("YAY! ❤️ You just made me the happiest person alive! 😍");
    startFireworks(); // Trigger fireworks
});

// Floating glowing hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Fireworks Effect
function startFireworks() {
    let fireworks = document.createElement("div");
    fireworks.classList.add("fireworks");
    document.body.appendChild(fireworks);
    setTimeout(() => fireworks.remove(), 5000);
}
