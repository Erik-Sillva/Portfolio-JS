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
    strings:["Web Developer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Form Validation //

const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setsucces(index) {
    if (index == 0) {
        inputs[0].style.border = '2px solid green'
        spans[0].style.display = 'none'
    } else if (index == 1){
        inputs[1].style.border = '2px solid green'
        spans[1].style.display = 'none'
    } else if (index == 2){
        inputs[2].style.border = '2px solid green'
        spans[2].style.display = 'none'
    } else if (index == 3){
        inputs[3].style.border = '2px solid green'
        spans[3].style.display = 'none'
    }
}

function setErro(index) {
    if (index == 0) {
        inputs[0].style.borderColor = '#dc3545'
        spans[0].style.display = 'block'
    } else if (index == 1){
        inputs[1].style.borderColor = '#dc3545'
        spans[1].style.display = 'block'
    } else if (index == 2){
        inputs[2].style.borderColor = '#dc3545'
        spans[2].style.display = 'block'
    } else if (index == 3){
        inputs[3].style.borderColor = '#dc3545'
        spans[3].style.display = 'block'
    }
}

function nameValidate() {
    if (inputs[0].value != '') {
        setsucces(0)
    } else {
        setErro(0)
    }
}

function emailValidate() {
    if (emailRegex.test(inputs[1].value)) {
        setsucces(1)
    } else {
        setErro(1)
    }
}

function subjectValidate() {
    if (inputs[2].value != '') {
        setsucces(2)
    } else {
        setErro(2)
    }
}

function messageValidate() {
    if (inputs[3].value != '') {
        setsucces(3)
    } else {
        setErro(3)
    }
}

function submitValidate() {
    if (inputs[0].value == '') {
        setErro(0)
    }
    if (inputs[1].value == '') {
        setErro(1)
    }
    if (inputs[2].value == '') {
        setErro(2)
    }
    if (inputs[3].value == '') {
        setErro(3)
    }
}