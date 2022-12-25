// Toggle Style Swticher //
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

function activeOn(on) {
    let home = document.querySelector('.home');
    let about = document.querySelector('.about');
    let services = document.querySelector('.services');
    let portfolio = document.querySelector('.portfolio');
    let contact = document.querySelector('.contact');

    if (on === 'home') {
        home.classList.add('active')

        about.classList.remove('active');
        services.classList.remove('active');
        portfolio.classList.remove('active');
        contact.classList.remove('active');
    } else if (on === 'about'){
        about.classList.add('active')

        home.classList.remove('active');
        services.classList.remove('active');
        portfolio.classList.remove('active');
        contact.classList.remove('active');

    } else if (on === 'services'){
        services.classList.add('active');

        home.classList.remove('active');
        about.classList.remove('active');
        portfolio.classList.remove('active');
        contact.classList.remove('active');
    } else if (on === 'portfolio'){
        portfolio.classList.add('active');

        home.classList.remove('active');
        about.classList.remove('active');
        services.classList.remove('active');
        contact.classList.remove('active');
    } else if (on === 'contact'){
        contact.classList.add('active');

        home.classList.remove('active');
        about.classList.remove('active');
        services.classList.remove('active');
        portfolio.classList.remove('active');
    }
}

//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme Colors //
function setActiveStyle(color) {
    if (color == '#ec1839') {
        document.documentElement.style.setProperty('--skin-color', color);
    } else if(color == '#fa5b0f') {
        document.documentElement.style.setProperty('--skin-color', color);
    } else if(color == '#37b182') {
        document.documentElement.style.setProperty('--skin-color', color);
    } else if(color == '#1854b4') {
        document.documentElement.style.setProperty('--skin-color', color);
    } else {
        document.documentElement.style.setProperty('--skin-color', color);
    }
}

// Theme Light And Dark Mode //

const daynight = document.querySelector('.day-night');
let mode = document.querySelector('.mode');

daynight.addEventListener('click', () => {
    mode.classList.toggle('fa-sun');
    mode.classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
    } else {
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
    }
});

// Text Effect //

let typed = new Typed('.typing', {
    strings:["Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});