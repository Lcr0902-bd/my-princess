const button = document.getElementById("openBtn");
const landing = document.querySelector(".landing");
const birthday = document.querySelector(".birthday");

const text = document.getElementById("typing-text");

const envelope = document.getElementById("envelope");
const seal = document.querySelector(".seal");
const letterInside = document.querySelector(".letter-inside");
const chapterThree = document.getElementById("chapter-three");
const memoriesBtn = document.getElementById("memoriesBtn");
const starsBtn = document.getElementById("starsBtn");
const chapterFour = document.getElementById("chapter-four");
const fadeOverlay = document.getElementById("fade-overlay");

memoriesBtn.addEventListener("click", function(e) {

    e.preventDefault();

    chapterThree.style.display = "block";

    chapterThree.scrollIntoView({
        behavior: "smooth"
    });

});

chapterThree.style.display = "none";

birthday.style.display = "none";


button.addEventListener("click", function() {

    landing.style.display = "none";
    birthday.style.display = "flex";

});


let sealClicked = false;
let letterStarted = false;

if (seal) {

    seal.addEventListener("click", function(e) {

        e.stopPropagation();

        if (!sealClicked) {

            sealClicked = true;

            seal.classList.add("clicked");

            document.querySelector(".envelope-cover h2").style.opacity = "0";

            document.querySelector(".inside-joke").style.opacity = "0";

        } else {

            seal.style.opacity = "0";

            envelope.classList.add("open");

            document.querySelector(".flap").style.transform = "rotateX(180deg)";

            setTimeout(() => {

                letterInside.style.opacity = "1";

                if (!letterStarted) {
                    letterStarted = true;
                    startTyping();
                }

            }, 800);

        }

    });

}


function startTyping() {

    let message = 
    "I made all of this just for you mi amor.\n\n" +
    "Every star, every detail, and every word is here for you to know how much I love you and how grateful I am to have you in my life. i never want to lose you and i want you with me for the rest of our lives. thank you for being you and being with me through everything. i love you more than you could ever imagine.\n\n" +
    "I hope today reminds you how loved and special you are mi vida. Happy birthday, my love. 💖";


    let i = 0;


    function typeWriter() {

        if (i < message.length) {

            text.innerHTML += message.charAt(i)
                .replace("\n", "<br>");

            i++;

            setTimeout(typeWriter, 50);

        }

    }


    typeWriter();

}
starsBtn.addEventListener("click", function(e){

    e.preventDefault();

    fadeOverlay.classList.add("active");

    setTimeout(() => {

        chapterFour.style.display = "flex";

        chapterFour.scrollIntoView({
            behavior: "smooth"
        });

    }, 800);


    setTimeout(() => {

        fadeOverlay.classList.remove("active");

    }, 1200);

});
const starPoints = document.querySelectorAll(".star-point");
const reasonBox = document.querySelector(".reason-box");

const reasons = [
    "I love how deep and thoughtful you are.",
    "I love your cute smile and lil dimples.",
    "I love how you can make me laugh even when im not in a good mood.",
    "I love how caring and trustful you are in your own special way.",
    "I love how you make me want to become a better person.",
    "I love that i can talk to you about anything thats on my mind and you wont judge me .",
    "I love the way you listen to me.",
    "I love how comfortable I feel being myself with you.",
    "I love your sense of humor (even tho its dark asl sometimes).",
    "I love how beautiful your eyes are.",
    "I love our late night talks and how you open up to me.",
    "I love how you don't judge me for my mistakes and put up with me",
    "I love how much fun we can have togehter.",
    "I love how honest you are with everyone including me.",
    "I love that you always know what to say even when i dont know what to say.",
    "I LOVE how smart you are.",
    "I love the person that you have become after all this time.",
    "I love everything we have built even after everything weve been through.",
    "I love you simply because youre an amazing human being."
];

starPoints.forEach((star, index) => {

    star.addEventListener("click", function() {

        reasonBox.style.opacity = "0";

        setTimeout(() => {

            reasonBox.innerHTML = `
                <span>Reason ${index + 1}</span>
                <p>${reasons[index]}</p>
            `;

            reasonBox.style.opacity = "1";

        }, 250);

    });

});
function goToChapterFive() {

    const chapterFive = document.getElementById("chapter-five");

    const targetPosition = chapterFive.getBoundingClientRect().top + window.scrollY;

    const startPosition = window.scrollY;

    const distance = targetPosition - startPosition;

    const duration = 1800;

    let startTime = null;

    function animation(currentTime) {

        if (!startTime) startTime = currentTime;

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const ease =
            progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(
            0,
            startPosition + distance * ease
        );

        if (progress < 1) {
            requestAnimationFrame(animation);
        }

    }

    requestAnimationFrame(animation);

}
const songs = [
    {
        title: "Apocalypse",
        artist: "Cigarettes After Sex",
        message: "sounds like how you make me feel"
    },
    {
        title: "Falling in Love",
        artist: "Cigarettes After Sex",
        message: "when we first started i would listen to this song on repeat because i related to the lyrics so much."
    },
    {
        title: "No One Noticed (Extended Spanish Version)",
        artist: "The Marías",
        message: "i dont think i need to explain to you but its also all i would listen while we first started, cant listen to it without crying."
    },
    {
        title: "Dear Soulmate",
        artist: "Laufey",
        message: "makes me think about how we're gonna go in the future and how we met at the perfect time for each other."
    },
    {
        title: "See Ya!",
        artist: "samona bleu",
        message: "ugh this song is so beginning us, i cant listen to it without crying either."
    },
    {
        title: "Valentine",
        artist: "Laufey",
        message: "oh how ive grown to love this song, i feel like this explained exactly how i felt for the longest time about you."
    },
    {
        title: "Not a Lot, Just Forever",
        artist: "Adrianne Lenker",
        message: "i feel like this song is also so us. every single basketball game or practice i would just listen to it and stare at you thinking about the future."
    },
    {
        title: "Lover, You Should've Come Over",
        artist: "Jeff Buckley",
        message: "please, need i say anything?"
    },
    {
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        message: "i think its just a classic that we both came to love that remind us of each other. i love it sm."
    }
];
function selectSong(index) {

    const song = songs[index];

    document.getElementById("current-song").textContent =
        song.title + " ♡";

    document.getElementById("current-artist").textContent =
        song.artist;

    document.getElementById("current-message").textContent =
        song.message;


    const ladybug = document.getElementById("selected-ladybug");

    const songCards = document.querySelectorAll(".song-card");

    const selectedCard = songCards[index];

    if (ladybug && selectedCard) {

        ladybug.style.top =
            selectedCard.offsetTop +
            (selectedCard.offsetHeight / 2) -
            10 +
            "px";

        ladybug.classList.add("visible");

    }

}
const togetherMoments = [
    "i just know we would go on long ass drives and buy food and blast music all the way. at 3 am or 3 pm because we both love driving. and even though you always claim youre not gonna let me drive, i WILL drive. maybe not all the time but i will drive.",

    "i dont think we would watch many movies but definitely a lot of shows. you would make me watch some scary movie just so you could make fun of me. if we're being real i will watch anything you want me to as long as you're next to me.",

    "well shi i already know most of my money gonna be spent on buying food for us at all times. i would ofc get you anything you want mi amor, i will forever buy you anything as long as i have the money.",

    "we would obviously fight the ref about everything. when youre into the game you love yelling and i have the best memories of that. so we would most definitely have the times of our lives watching vb and basketball",

    "oh we would be perfect for this. if i had the chance to chud around the way you do i would be happy asf. and i hope that you would love to personally chud with me."
];

function showTogether(index) {

    const messageBox = document.getElementById("together-message");

    messageBox.innerHTML = `
        <p>${togetherMoments[index]}</p>
    `;

}
function goToChapterSeven() {

    const chapterSeven = document.getElementById("chapter-seven");

    if (chapterSeven) {

        chapterSeven.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}
function goToChapterSix() {

    const chapterSix = document.getElementById("chapter-six");

    if (chapterSix) {

        chapterSix.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}