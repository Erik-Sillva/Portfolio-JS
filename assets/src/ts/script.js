"use strict";
// Toggle Menu //
const styleSwitcher = document.querySelector(".style-switcher");
const links = document.querySelectorAll('.aside-link');
let menutoggle = document.querySelector('.toggle');
let aside = document.querySelector('.aside');
let skinColor = '#ec1839';
window.addEventListener('resize', () => {
    if (window.screen.width >= 1001 && menutoggle && aside && aside instanceof HTMLElement) {
        aside.style.left = '0';
        menutoggle.classList.add('active-menu');
    }
    else {
        hiddenSidebar();
    }
});
menutoggle?.addEventListener("click", () => {
    menutoggle?.classList.toggle('active-menu');
    if (window.screen.width <= 1000) {
        if (menutoggle?.classList.contains('active-menu') && aside && aside instanceof HTMLElement) {
            aside.style.left = '0';
        }
        else if (aside && aside instanceof HTMLElement) {
            aside.style.left = '-10em';
        }
    }
});
// Hidden Sidebar Click //
const hiddenSidebar = () => {
    if (window.screen.width <= 1000 && menutoggle && aside && aside instanceof HTMLElement) {
        aside.style.left = '-10em';
        menutoggle.classList.remove('active-menu');
    }
};
// Toggle Style Swticher //
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle?.addEventListener("click", () => {
    document.querySelector(".style-switcher")?.classList.toggle("open");
});
// Limpa a class active de todos os links que conte-la
const clearClass = () => {
    links.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
};
// Section Check //
const activeOn = (value) => {
    links.forEach(item => {
        if (item.classList.contains(value)) {
            clearClass();
            item.classList.add('active');
        }
    });
};
//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (styleSwitcher?.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});
// Theme Colors //
function setActiveStyle(color) {
    if (color.length < 3 || color.length > 6) {
        document.documentElement.style.setProperty('--skin-color', skinColor);
    }
    skinColor = color;
    document.documentElement.style.setProperty('--skin-color', skinColor);
    calcScrollValue();
}
const hexaColor = () => {
    let inputColor = document.querySelector('#hexa-decimal');
    let valueColor = inputColor.value;
    const regexHexa = /^#?[0-9A-Fa-f]{3,6}$/;
    if (!valueColor.startsWith('#')) {
        valueColor = '#' + valueColor;
    }
    if (inputColor) {
        const hexaValue = regexHexa.test(valueColor);
        if (hexaValue) {
            inputColor.style.border = '2px solid #198754';
            setActiveStyle(valueColor);
        }
        else {
            inputColor.style.border = '2px solid #dc3545';
            setActiveStyle('#ec1839');
        }
    }
};
// Theme Light And Dark Mode
const daynight = document.querySelector('.day-night');
let mode = document.querySelector('.mode');
daynight?.addEventListener('click', () => {
    mode?.classList.toggle('fa-sun');
    mode?.classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        mode?.classList.remove('fa-moon');
        mode?.classList.add('fa-sun');
    }
    else {
        mode?.classList.add('fa-moon');
        mode?.classList.remove('fa-sun');
    }
});
// Form Validation //
const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.required');
const inp2 = document.querySelectorAll('#text-area');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
const setSuccesOrErro = (n, command) => {
    if (command == 'succes') {
        if (inputs[n] instanceof HTMLElement && spans[n] instanceof HTMLSpanElement) {
            inputs[n].style.borderColor = '#198754';
            spans[n].style.display = 'none';
        }
    }
    else if (command == 'erro') {
        if (inputs[n] instanceof HTMLElement && spans[n] instanceof HTMLSpanElement) {
            inputs[n].style.borderColor = '#dc3545';
            spans[n].style.display = 'block';
        }
    }
};
// Valida os inputs verificando se eles existem e não estão vazios
const validate = (i) => {
    if (inputs && inputs[i] && inputs[i] instanceof HTMLInputElement) {
        const inputValue = inputs[i].value.trim();
        if (inputValue != '' && inputs[i].value != ' ' && inputs[i].value != 'ﾠ' && inputs[i].value != 'ㅤ') {
            setSuccesOrErro(i, 'succes');
        }
        else {
            setSuccesOrErro(i, 'erro');
        }
    }
};
const emailValidate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputs && inputs[1] && inputs[1] instanceof HTMLInputElement) {
        const emailValue = regex.test(inputs[1].value);
        if (emailValue) {
            setSuccesOrErro(1, 'succes');
        }
        else {
            setSuccesOrErro(1, 'erro');
        }
    }
};
// Faz a mesma coisa que a de cima, a difereça é q essa é especifica para a mensagem
const messageValidate = (i) => {
    const inputValue = inputs[i].value.trim();
    if (inputValue != '' && inputs[i].value != ' ' && inputs[i].value != 'ﾠ' && inputs[i].value != 'ㅤ') {
        setSuccesOrErro(i, 'succes');
    }
    else {
        setSuccesOrErro(i, 'erro');
    }
};
const submitValidate = () => {
    if (inputs) {
        inputs.forEach((item, index) => {
            if (item.value === '' || item.value == ' ' || item.value == 'ﾠ' || item.value == 'ㅤ') {
                setSuccesOrErro(index, 'erro');
            }
        });
    }
};
// Button to top
let calcScrollValue = () => {
    let scrollProgress = document.querySelector('.progress-top');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos && pos > 100) {
        scrollProgress.style.transform = 'translateY(0px)';
    }
    else {
        scrollProgress.style.transform = 'translateY(100px)';
    }
    scrollProgress?.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(${skinColor} ${scrollValue}%, #d7d7d7b6 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
let translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre',
            services: 'Serviços',
            portfolio: 'Portfólio',
            contact: 'Contato'
        },
        // home: {
        //     title: 'Bem-vindo',
        //     subtitle: 'Olá, meu nome é Erik Silva',
        //     profession: 'Sou desenvolvedor front-end com experiência em HTML, CSS, SASS, Bootstrap, JavaScript e TypeScript'
        // },
        // about: {
        //     title: 'Sobre Mim',
        //     description: 'Erik Silva - Desenvolvedor Web',
        //     bio: 'Sou brasileiro e desde muito jovem sempre me interessei pela área de TI, hoje busco aprofundar ainda mais meus conhecimentos e estou em constante evolução, tanto profissional quanto pessoal. Sempre dou o meu melhor no que faço, pois valorizo a qualidade do meu trabalho e a satisfação dos meus clientes.',
        //     birthday: 'Data de Nascimento: 02 jul 2004',
        //     age: 'Idade: 18',
        //     github: 'Github: github.com/Erik-Sillva',
        //     email: 'Email: eriksilva.developer@gmail.com',
        //     phone: 'Telefone: +55 87 999929262',
        //     city: 'Cidade: Trindade, Pernambuco, Brasil',
        //     freelance: 'Freelancer: Disponível',
        //     downloadCV: 'Baixar CV',
        //     hireMe: 'Contrate-me',
        //     education: 'Educação',
        //     courses: {
        //         typescript: 'Curso de TypeScript',
        //         typescriptdesc: 'Curso completo de TypeScript, desde o básico até o avançado, com mais de 70 aulas',
        //         webdev: 'Curso de Desenvolvimento Web Completo',
        //         webdevdesc: 'Domine Web - 20 cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais',
        //         javascript: 'Curso de JavaScript',
        //         javascriptdesc: 'Neste curso aprendi o básico e as melhores práticas de JavaScript, como funções, eventos, loops de recursão e muito mais',
        //         algorithms: 'Curso de Algoritmos e Lógica de Programação',
        //         algorithmsdesc: 'Este curso abrange os conceitos de lógica de programação e algoritmos com a ferramenta Portugol Studio',
        //         htmlcss: 'Curso de HTML5 e CSS3',
        //         htmlcssdesc: 'Neste curso, aprendi sobre tags HTML5, CSS3, semântica, responsividade, mobile first, formulários, desempenho do site e animações'
        //     }
        // },
        // services: {
        //     title: 'Serviços',
        //     description: 'Desenvolvedor Web',
        //     details: 'Desenvolvimento com HTML, CSS, JavaScript, SASS, Bootstrap e TypeScript'
        // },
        // portfolio: {
        //     title: 'Portfólio',
        //     projects: 'Meus Últimos Projetos:'
        // },
        // contact: {
        //     title: 'Entre em Contato',
        //     subtitle: 'Tem alguma dúvida?',
        //     message: 'Estou à sua disposição.',
        //     call: 'Ligue para nós em',
        //     email: 'Envie-nos um e-mail',
        //     name: 'Nome',
        //     subject: 'Assunto',
        //     messages: 'Mensagem'
        // },
        // settings: {
        //     theme: 'Cores do Tema',
        //     color: 'Cor',
        //     language: 'Idioma'
        // }
    }
};
const setLanguage = (lang) => {
    if (lang === 'pt') {
        updateTranslations('pt');
    }
    else if ('en') {
        updateTranslations('en');
    }
    else if ('es') {
        updateTranslations('es');
    }
};
const updateTranslations = (lang) => {
    if (lang === 'pt') {
        Object.keys(translations[lang][key]).forEach((key) => {
            let element = document.getElementById(key);
            console.log(element);
            if (element) {
                element.innerHTML = translations[lang][key];
            }
        });
    }
};
