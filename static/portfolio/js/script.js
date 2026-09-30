// ================= THEME TOGGLE =================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

let darkMode = false;


// Check saved theme

if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}


// Theme toggle

themeToggle.addEventListener("click", () => {

    darkMode = !darkMode;

    if (darkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

});



function enableDarkMode() {

    body.setAttribute("data-theme", "dark");

    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

    localStorage.setItem(
        "darkMode",
        "enabled"
    );

    darkMode = true;

}



function disableDarkMode() {

    body.removeAttribute("data-theme");

    themeToggle.innerHTML =
        '<i class="fas fa-moon"></i>';

    localStorage.setItem(
        "darkMode",
        "disabled"
    );

    darkMode = false;

}



// ================= PARTICLES =================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,

            density: {
                enable: true,
                value_area: 800
            }

        },


        color: {
            value: "#6e45e2"
        },


        shape: {
            type: "circle"
        },


        opacity: {
            value: 0.5,
            random: false
        },


        size: {
            value: 3,
            random: true
        },


        line_linked: {

            enable: true,
            distance: 150,
            color: "#6e45e2",
            opacity: 0.4,
            width: 1

        },


        move: {

            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"

        }

    },


    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },


            onclick: {
                enable: true,
                mode: "push"
            },


            resize: true

        },


        modes: {

            grab: {

                distance: 140,

                line_linked: {
                    opacity: 1
                }

            },


            push: {
                particles_nb: 4
            }

        }

    },


    retina_detect: true

});



// ================= SCROLL ANIMATION =================

const projectCards =
    document.querySelectorAll(".project-card");


const skillBars =
    document.querySelectorAll(".skill-progress");



function checkScroll() {


    // Project animation

    projectCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;


        if (cardTop < window.innerHeight - 100) {

            setTimeout(() => {

                card.classList.add("visible");

            }, index * 200);

        }

    });



    // Skill animation

    skillBars.forEach((bar) => {

        const barTop =
            bar.getBoundingClientRect().top;


        if (
            barTop < window.innerHeight - 100 &&
            !bar.dataset.animated
        ) {

            const width =
                bar.getAttribute("data-width");


            bar.style.width = width;


            bar.dataset.animated = "true";

        }

    });

}



window.addEventListener(
    "scroll",
    checkScroll
);


window.addEventListener(
    "load",
    checkScroll
);