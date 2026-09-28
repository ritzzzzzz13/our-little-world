
/* =========================================================
   PASSWORD GATE
   ========================================================= */

const PASSWORD = "29.08.22";

const passwordGate = document.getElementById("passwordGate");
const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const passwordError = document.getElementById("passwordError");

function unlockWebsite() {
    if (passwordInput.value === PASSWORD) {
        passwordError.classList.remove("show");
        passwordGate.classList.add("unlocked");

        setTimeout(() => {
            passwordGate.remove();
        }, 700);
    } else {
        passwordError.classList.add("show");
        passwordInput.classList.remove("shake");
        void passwordInput.offsetWidth;
        passwordInput.classList.add("shake");
        passwordInput.select();
    }
}

passwordButton.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        unlockWebsite();
    }
});


/* ==========================================
   ELEMENTS
========================================== */

const opening = document.getElementById("opening");
const openButton = document.getElementById("openButton");

const slider = document.getElementById("slider");
const slideContainer = document.getElementById("slideContainer");

const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");

const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");


/* ==========================================
   SLIDES
========================================== */

const slides = [

    {
        type: "photo",
        number: "01",
        title: "You probably don't remember...",
        text: "Every time, I just took a screenshot of your Insta story.",
        image: "images/2.jpeg",
        caption:
            "I think I remember a little too many of the random things that have you in them. ♡"
    },

    {
        type: "photo",
        number: "02",
        title: "A little trip,",
        subtitle: "a lot of memories.",
        image: "images/1.jpeg",
        caption:
            "Somewhere between the mountains, the waterfalls and all those little moments... this became one of my favourite memories of you. 🤍"
    },

    {
        type: "video",
        number: "03",
        title: "Hehehehe, you didn't know about this one.",
        text:
            "There's something you don't know I have.",
        video: "videos/1.mp4",
        caption:
            "You had absolutely no idea I was taking this. And honestly... I'm kind of glad you didn't. 🤭",
        small:
            "Some of my favourite moments are the ones you never knew became memories for me."
    },

    {
        type: "favorite",
        number: "04",
        title: "And then there's this one.",
        image: "images/3.jpeg",
        caption:
            "It's my favourite photo of us.",
        text:
            "Not just because of how we look in it... but because every time I see it, I remember how it felt to be there with you.",
        small:
            "I think I'd choose this memory again. ♡"
    },

    {
        type: "video",
        number: "05",
        title: "It's funny...",
        text:
            "Sometimes the smallest things stay with you the longest.",
        video: "videos/2.mp4",
        caption:
            "Like this. Just my hand in yours. Nothing dramatic. Nothing complicated. Just something I really like. 🤍"
    },

    {
        type: "chat",
        number: "06",
        title: "Some words stay.",
        image: "images/5.jpeg",
        caption:
            "Sometimes you don't realise how much a few words can mean... until they come from someone you've been missing too. 🤍",
        small:
            "I saved this one."
    },

    {
        type: "photo",
        number: "07",
        title: "Okay, fine...",
        image: "images/4.jpeg",
        caption:
            "I'm hiding my face in this one. 😭 But I still wanted it here.",
        small:
            "Because it's still us. And I really like us. ♡"
    },

    {
        type: "photo",
        number: "08",
        title: "One step at a time.",
        image: "images/6.jpeg",
        caption:
            "I don't know what every tomorrow will look like.",
        text:
            "But I really like the moments where we're walking through it together. 🤍"
    },

    {
        type: "video",
        number: "09",
        title: "And then...",
        text:
            "there was this. Us. Again. Just a little more recently. 🤍",
        video: "videos/3.mp4",
        caption:
            "And somehow, after all these memories, I still get happy seeing us together."
    },

    {
        type: "love",
        number: "10",
        title: "A few things I don't say enough...",
        notes: [
            "♡ You make ordinary days feel a little more special. Bas gussa mat kiya karo aur ache se behave kiya karo.",
            "♡ I love our random little moments, thodi bahut ladaai aur pyaar… par tum ladte rehte ho mujhse.",
            "♡ I notice more than I probably tell you, so please take care of me.",
            "♡ I'm really grateful for the memories we've made, and I hope we make many more.",
            "♡ And yes... I really, really like having you in my life. So take care of me like a baby and love me."
        ]
    },

    {
        type: "letter",
        number: "11",
        title: "One last thing...",
        paragraphs: [
            "If you're reading this, I hope you know that every picture, every video and every little memory here was chosen because it means something to me.",

            "I don't always know how to say everything properly, but I hope you can feel it in the little things.",

            "Thank you for being part of so many memories that I know I'll always smile about.",

            "And for whatever comes next, I'm just happy that somewhere along the way, there became an us. 🤍"
        ]
    },

    {
        type: "final",
        number: "12",
        title: "And that's it...",
        text:
            "Just a tiny little corner of my heart that I wanted you to see. 🤍",
        caption:
            "I hope you smiled at least once.",
        small:
            "Because you deserve to be loved in all the little ways too.",
        ending:
            "I love you. 🤍"
    }

];


let currentIndex = 0;


/* ==========================================
   CREATE SLIDE HTML
========================================== */

function createSlide(slide, index) {

    const section = document.createElement("section");

    section.className = "slide";

    if (index === 0) {
        section.classList.add("active");
    }


    /* ---------- PHOTO ---------- */

    if (slide.type === "photo") {

        section.innerHTML = `

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
                ${slide.subtitle ? `<br>${slide.subtitle}` : ""}
            </h2>

            <div class="photo-frame">
                <img src="${slide.image}" alt="Memory">
            </div>

            <p class="slide-text">
                ${slide.caption}
            </p>

            ${slide.text
                ? `<p class="slide-small">${slide.text}</p>`
                : ""
            }

        `;
    }


    /* ---------- VIDEO ---------- */

    if (slide.type === "video") {

        section.innerHTML = `

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
            </h2>

            ${slide.text
                ? `<p class="slide-text">${slide.text}</p>`
                : ""
            }

            <div class="video-frame">

                <video
                    controls
                    playsinline
                    preload="metadata">

                    <source
                        src="${slide.video}"
                        type="video/mp4">

                </video>

            </div>

            <p class="slide-text">
                ${slide.caption}
            </p>

            ${slide.small
                ? `<p class="slide-small">${slide.small}</p>`
                : ""
            }

        `;
    }


    /* ---------- FAVORITE PHOTO ---------- */

    if (slide.type === "favorite") {

        section.innerHTML = `

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
            </h2>

            <div class="favorite-frame">

                <img
                    src="${slide.image}"
                    alt="Our favourite memory">

            </div>

            <p class="slide-text">
                ${slide.caption}
            </p>

            <p class="slide-text">
                ${slide.text}
            </p>

            <p class="slide-small">
                ${slide.small}
            </p>

        `;
    }


    /* ---------- CHAT ---------- */

    if (slide.type === "chat") {

        section.innerHTML = `

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
            </h2>

            <div class="photo-frame chat">

                <img
                    src="${slide.image}"
                    alt="A message I saved">

            </div>

            <p class="slide-text">
                ${slide.caption}
            </p>

            <p class="slide-small">
                ${slide.small}
            </p>

        `;
    }


    /* ---------- LOVE NOTES ---------- */

    if (slide.type === "love") {

        section.innerHTML = `

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
            </h2>

            <div class="love-note-card">

                ${slide.notes
                    .map(note => `<p>${note}</p>`)
                    .join("")
                }

            </div>

        `;
    }


    /* ---------- LETTER ---------- */

    if (slide.type === "letter") {

        section.innerHTML = `

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
            </h2>

            <div class="letter-card">

                ${slide.paragraphs
                    .map(
                        paragraph =>
                            `<p>${paragraph}</p>`
                    )
                    .join("")
                }

                <p class="letter-ending">
                    Always. 🤍
                </p>

            </div>

        `;
    }


    /* ---------- FINAL ---------- */

    if (slide.type === "final") {

        section.classList.add("final-slide");

        section.innerHTML = `

            <div class="final-heart">
                ♡
            </div>

            <p class="slide-label">
                ${slide.number}
            </p>

            <h2>
                ${slide.title}
            </h2>

            <p class="slide-text">
                ${slide.text}
            </p>

            <p class="slide-text">
                ${slide.caption}
            </p>

            <p class="slide-small">
                ${slide.small}
            </p>

            <p class="slide-text">
                ${slide.ending}
            </p>

        `;
    }


    return section;
}


/* ==========================================
   LOAD SLIDES
========================================== */

totalSlides.textContent =
    String(slides.length).padStart(2, "0");

slides.forEach((slide, index) => {

    const element = createSlide(slide, index);

    slideContainer.appendChild(element);

});


const slideElements =
    document.querySelectorAll(".slide");


/* ==========================================
   UPDATE SLIDE
========================================== */

function updateSlide(newIndex) {

    if (newIndex < 0) {
        return;
    }

    if (newIndex >= slides.length) {
        return;
    }


    /* Stop current videos */

    slideElements[currentIndex]
        .querySelectorAll("video")
        .forEach(video => {

            video.pause();

            video.currentTime = 0;

        });


    slideElements[currentIndex]
        .classList.remove("active");


    currentIndex = newIndex;


    slideElements[currentIndex]
        .classList.add("active");


    currentSlide.textContent =
        String(currentIndex + 1).padStart(2, "0");


    prevButton.disabled =
        currentIndex === 0;


    if (currentIndex === slides.length - 1) {

        nextButton.innerHTML =
            `REPLAY <span>↻</span>`;

    } else {

        nextButton.innerHTML =
            `NEXT <span>→</span>`;

    }

}


/* ==========================================
   NEXT
========================================== */

nextButton.addEventListener(
    "click",
    function () {

        if (currentIndex === slides.length - 1) {

            updateSlide(0);

        } else {

            updateSlide(currentIndex + 1);

        }

    }
);


/* ==========================================
   PREVIOUS
========================================== */

prevButton.addEventListener(
    "click",
    function () {

        updateSlide(currentIndex - 1);

    }
);


/* ==========================================
   OPEN WEBSITE
========================================== */

openButton.addEventListener(
    "click",
    function () {

        /* Start music */

        backgroundMusic.volume = 0.35;

        backgroundMusic
            .play()
            .catch(error => {

                console.log(
                    "Music could not start:",
                    error
                );

            });


        /* Fade opening */

        opening.style.transition =
            "opacity 1.2s ease";

        opening.style.opacity = "0";


        setTimeout(function () {

            opening.style.display = "none";

            slider.classList.remove("hidden");

        }, 1200);

    }
);


/* ==========================================
   MUSIC BUTTON
========================================== */

let musicPlaying = true;


musicButton.addEventListener(
    "click",
    function () {

        if (musicPlaying) {

            backgroundMusic.pause();

            musicButton.textContent = "♪";
            musicButton.setAttribute("aria-label", "Play music");

            musicPlaying = false;

        } else {

            backgroundMusic.play();

            musicButton.textContent = "♫";
            musicButton.setAttribute("aria-label", "Pause music");

            musicPlaying = true;

        }

    }
);


/* ==========================================
   KEYBOARD
========================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "ArrowRight") {

            updateSlide(currentIndex + 1);

        }

        if (event.key === "ArrowLeft") {

            updateSlide(currentIndex - 1);

        }

    }
);


/* ==========================================
   TOUCH / SWIPE
========================================== */

let touchStartX = 0;

let touchEndX = 0;


slider.addEventListener(
    "touchstart",
    function (event) {

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


slider.addEventListener(
    "touchend",
    function (event) {

        touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchStartX - touchEndX;


        if (Math.abs(difference) < 50) {
            return;
        }


        if (difference > 0) {

            updateSlide(currentIndex + 1);

        } else {

            updateSlide(currentIndex - 1);

        }

    },
    { passive: true }
);


/* ==========================================
   INITIAL STATE
========================================== */

updateSlide(0);