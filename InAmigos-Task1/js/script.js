// LOADER

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// TYPING EFFECT

const typingElement = document.getElementById("typing");

if (typingElement) {

    const words = [
        "Helping Communities",
        "Empowering Children",
        "Supporting Animals",
        "Planting Trees",
        "Creating Change"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!isDeleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;

                setTimeout(typeEffect, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
}

// DARK MODE

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }
    });
}

// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// COUNTERS

const counters = document.querySelectorAll(".counter");

function startCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        let count = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.textContent = count;

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

let counterStarted = false;

window.addEventListener("scroll", () => {

    const impactSection =
        document.querySelector(".impact");

    if (impactSection && !counterStarted) {

        const top =
            impactSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            startCounters();
            counterStarted = true;
        }
    }
});

// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

// SCROLL REVEAL

const revealElements =
document.querySelectorAll(
    ".project-card, .impact-box, .gallery-grid img"
);

function reveal() {

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });
}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .6s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// IMAGE LIGHTBOX

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox =
            document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background =
            "rgba(0,0,0,.9)";
        lightbox.style.display = "flex";
        lightbox.style.justifyContent = "center";
        lightbox.style.alignItems = "center";
        lightbox.style.zIndex = "9999";

        const image =
            document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "10px";

        lightbox.appendChild(image);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});