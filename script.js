const titleText = "Grace Nicoletta Matturie 💜";

const messageEN = `If you knew how much I love you...
Even without saying much, you can feel it in how I move.

I’m not your man yet,
But in my mind… you already got a place no one can take.

This isn’t a phase or a game,
It’s something real growing slowly.

Even when we don’t talk, you’re on my mind,
You got something different… something rare.

And maybe I don’t say it all the time,
But I care… for real.

If one day you look my way,
Just know I never left.

No pressure… no games…
Just something real.`;

let i = 0;

/* ✍️ animation texte */
function typeWriter(text) {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text), 30);
    }
}

/* 🎵 musique fiable mobile */
function startMusic() {
    const music = document.getElementById("bg-music");

    music.play().then(() => {
        document.querySelector(".music-btn").innerText = "🎵 Playing...";
    }).catch((err) => {
        alert("Tap again to start music 💜");
    });
}

function startMusic() {
    const music = document.getElementById("bg-music");

    music.play().catch(() => {
        console.log("Tap again required on mobile");
    });
}

/* 🚀 init */
document.getElementById("title").innerHTML = titleText;
typeWriter(messageEN);