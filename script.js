const titleText = "Grace Nicoletta Matturie 💜";

const messageEN = `If you knew how much I love you...
Even without saying much, you could see it in how I move.

I’m not the one you call “your man” yet,
But in my mind… you already got a place no one can remove.

If you knew how much I love you,
This ain’t a phase, it’s something real.

I don’t wanna rush it or mess things up,
I just wanna build something that we both can feel.

Even when we don’t talk, you’re on my mind,
You got something different… something rare.

And maybe I don’t say it all the time,
But trust me… I care.

If one day you look my way,
Just know I’ve been right here.

No pressure… no games…
Just something real.`;

const messageFR = `Si tu savais à quel point je t’aime...
Même sans trop parler, ça se voit dans ma manière d’agir.

Je suis pas encore celui que tu appelles ton gars,
Mais dans ma tête, t’as déjà une place que personne peut prendre.

C’est pas un délire ou un moment,
C’est quelque chose de vrai.

Je veux pas aller trop vite ni tout gâcher,
Je veux juste construire quelque chose de réel avec toi.

Même quand on parle pas, j’pense à toi,
T’as un truc différent… un truc rare.

Et même si je le dis pas tout le temps,
Sache que je tiens à toi.

Et si un jour tu regardes vers moi,
Sache que j’ai toujours été là.

Pas de pression… pas de jeu…
Juste quelque chose de vrai.`;

let currentLang = "EN";
let i = 0;
let musicStarted = false;

/* 🎧 MUSIC START (on first interaction) */
function startMusic() {
    if (!musicStarted) {
        const music = document.getElementById("bg-music");
        music.play().catch(() => {});
        musicStarted = true;
    }
}

/* 🎤 Typewriter */
function typeWriter(text) {
    if (i < text.length) {
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text), 30);
    }
}

function startTyping(text) {
    document.getElementById("message").innerHTML = "";
    i = 0;
    typeWriter(text);
}

/* 🔁 Switch language */
function toggleLanguage() {
    startMusic(); // 🎵 démarre musique dès interaction

    const btn = document.querySelector(".btn");

    if (currentLang === "EN") {
        currentLang = "FR";
        btn.innerHTML = "EN 🇬🇧";
        startTyping(messageFR);
    } else {
        currentLang = "EN";
        btn.innerHTML = "FR 🇫🇷";
        startTyping(messageEN);
    }
}

/* 🚀 INIT */
document.getElementById("title").innerHTML = titleText;
startTyping(messageEN);

/* 🎵 démarre musique dès premier clic n'importe où */
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });        