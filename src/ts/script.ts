// Toggle Menu //
const styleSwitcher = document.querySelector(".style-switcher");
const links = document.querySelectorAll('.aside-link');
let menutoggle = document.querySelector('.toggle');
let aside = document.querySelector('.aside');
let skinColor = '#ec1839'

window.addEventListener('resize', () => {
    if (window.screen.width >= 1001 && menutoggle && aside && aside instanceof HTMLElement) {
        aside.style.left = '0'
        menutoggle.classList.add('active-menu');
    } else {
        hiddenSidebar()
    }
});

menutoggle?.addEventListener("click", () => {
    menutoggle?.classList.toggle('active-menu');

    if (window.screen.width <= 1000) {
        if (menutoggle?.classList.contains('active-menu') && aside && aside instanceof HTMLElement) {
            aside.style.left = '0'
        } else if (aside && aside instanceof HTMLElement) {
            aside.style.left = '-10em'
        }
    }
});

// Hidden Sidebar Click //
const hiddenSidebar = () => {
    if (window.screen.width <= 1000 && menutoggle && aside && aside instanceof HTMLElement) {
        aside.style.left = '-10em'
        menutoggle.classList.remove('active-menu');
    }
}

// Toggle Style Swticher //
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle?.addEventListener("click", () => {
    document.querySelector(".style-switcher")?.classList.toggle("open");
})

// Limpa a class active de todos os links que conte-la
const clearClass = () => {
    links.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        }
    })
}

// Section Check //
const activeOn = (value: string) => {
    links.forEach(item => {
        if (item.classList.contains(value)) {
            clearClass()
            item.classList.add('active')
        }
    })
}

//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (styleSwitcher?.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// Theme Colors //
function setActiveStyle(color: string) {
    if (color.length < 3 || color.length > 6) {
        document.documentElement.style.setProperty('--skin-color', skinColor);
    }
    skinColor = color
    document.documentElement.style.setProperty('--skin-color', skinColor);
    calcScrollValue()
}

const hexaColor = () => {
    let inputColor = document.querySelector('#hexa-decimal') as HTMLInputElement
    let valueColor = inputColor.value
    const regexHexa = /^#?[0-9A-Fa-f]{3,6}$/

    if (!valueColor.startsWith('#')) {
        valueColor = '#' + valueColor
    }

    if (inputColor) {
        const hexaValue = regexHexa.test(valueColor)

        if (hexaValue) {
            inputColor.style.border = '2px solid #198754'
            setActiveStyle(valueColor)
        } else {
            inputColor.style.border = '2px solid #dc3545'
            setActiveStyle('#ec1839')
        }
    }
}

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
    } else {
        mode?.classList.add('fa-moon');
        mode?.classList.remove('fa-sun');
    }
});

// Form Validation //
const form = document.querySelector('#form');
const inputs = document.querySelectorAll('.required') as NodeListOf<HTMLInputElement>
const inp2 = document.querySelectorAll('#text-area');
const spans = document.querySelectorAll('.span-required') as NodeListOf<HTMLSpanElement>
const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;

const setSuccesOrErro = (n: number, command: string) => {
    if (command == 'succes') {
        if (inputs[n] instanceof HTMLElement && spans[n] instanceof HTMLSpanElement) {
            inputs[n].style.borderColor = '#198754'
            spans[n].style.display = 'none'
        }
    } else if (command == 'erro') {
        if (inputs[n] instanceof HTMLElement && spans[n] instanceof HTMLSpanElement) {
            inputs[n].style.borderColor = '#dc3545'
            spans[n].style.display = 'block'
        }
    }
}

// Valida os inputs verificando se eles existem e não estão vazios
const validate = (i: number) => {
    if (inputs && inputs[i] && inputs[i] instanceof HTMLInputElement) {
        const inputValue = inputs[i].value.trim()
        if (inputValue != '' && inputs[i].value != ' ' && inputs[i].value != 'ﾠ' && inputs[i].value != 'ㅤ') {
            setSuccesOrErro(i, 'succes')
        } else {
            setSuccesOrErro(i, 'erro')
        }
    }
}

const emailValidate = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputs && inputs[1] && inputs[1] instanceof HTMLInputElement) {
        const emailValue = regex.test(inputs[1].value);

        if (emailValue) {
            setSuccesOrErro(1, 'succes')
        } else {
            setSuccesOrErro(1, 'erro')
        }
    }
}

// Faz a mesma coisa que a de cima, a difereça é q essa é especifica para a mensagem
const messageValidate = (i: number) => {
    const inputValue = inputs[i].value.trim()
    if (inputValue != '' && inputs[i].value != ' ' && inputs[i].value != 'ﾠ' && inputs[i].value != 'ㅤ') {
        setSuccesOrErro(i, 'succes')
    } else {
        setSuccesOrErro(i, 'erro')
    }
}

const submitValidate = () => {
    if (inputs) {
        inputs.forEach((item, index) => {
            if (item.value === '' || item.value == ' ' || item.value == 'ﾠ' || item.value == 'ㅤ') {
                setSuccesOrErro(index, 'erro')
            }
        })
    }
}

// Button to top
let calcScrollValue = () => {
    let scrollProgress = document.querySelector('.progress-top') as HTMLElement
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos && pos > 100) {
        scrollProgress.style.transform = 'translateY(0px)';
    } else {
        scrollProgress.style.transform = 'translateY(100px)';
    }

    scrollProgress?.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(${skinColor} ${scrollValue}%, #d7d7d7b6 ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Idiomas

interface Translations {
    [key: string]: {
        [key: string]: string;
    };
}

interface TranslationKeys {
    //nav
    homeObj: string;
    aboutObj: string;
    servicesObj: string;
    portfolioObj: string;
    contactObj: string;

    //home
    titleObj: string;
    subtitleObj: string;
    professionObj: string;
    professiondescObj: string;

    //about
    titleaboutObj: string;
    descriptionObj: string;
    bioObj: string;
    birthdayObj: string;
    ageObj: string;
    githubObj: string;
    emailObj: string;
    phoneObj: string;
    cityObj: string;
    freelanceObj: string;
    downloadCVObj: string;
    hireMeObj: string;
    educationObj: string;
    typescriptObj: string;
    typescriptdescObj: string;
    webdevObj: string;
    webdevdescObj: string;
    javascriptObj: string;
    javascriptdescObj: string;
    algorithmsObj: string;
    algorithmsdescObj: string;
    htmlcssObj: string;
    htmlcssdescObj: string;  

    //services
    titleservicesObj: string;
    descriptionservicesObj: string;
    detailsObj: string;

    //portfolio
    titleportfolioObj: string;
    projectsObj: string;

    //contact
    titlecontactObj: string;
    subtitlecontactObj: string;
    messageObj: string;
    callObj: string;
    emailcontactObj: string;
    emailmessageObj: string;
    linksmessageObj: string;
    nameObj: string;
    subjectObj: string;
    messagesObj: string;
    spanerroObj: string;
    sendmessageObj: string;

    //settings
    themeObj: string;
    colorObj: string;
    languageObj: string;
}

let translations: Translations = {
    pt: {
        //nav
        homeObj: 'Início',
        aboutObj: 'Sobre',
        servicesObj: 'Serviços',
        portfolioObj: 'Portfólio',
        contactObj: 'Contato',

        //home
        titleObj: 'Bem-vindo',
        subtitleObj: 'Olá, meu nome é',
        professionObj: 'Sou',
        professiondescObj: 'Sou desenvolvedor front-end com experiência em HTML, CSS, SASS, Bootstrap, JavaScript e TypeScript',

        //about
        titleaboutObj: 'Sobre Mim',
        descriptionObj: 'Desenvolvedor Web',
        bioObj: 'Sou brasileiro e desde muito jovem sempre me interessei pela área de TI, hoje busco aprofundar ainda mais meus conhecimentos e estou em constante evolução, tanto profissional quanto pessoal. Sempre dou o meu melhor no que faço, pois valorizo a qualidade do meu trabalho e a satisfação dos meus clientes.',
        birthdayObj: 'Data de Nascimento',
        ageObj: 'Idade',
        githubObj: 'Github',
        emailObj: 'Email',
        phoneObj: 'Telefone',
        cityObj: 'Cidade',
        freelanceObj: 'Freelancer',
        downloadCVObj: 'Baixar CV',
        hireMeObj: 'Contrate-me',
        educationObj: 'Educação',

        // courses
        typescriptObj: 'Curso de TypeScript',
        typescriptdescObj: 'Curso completo de TypeScript, desde o básico até o avançado, com mais de 70 aulas',
        webdevObj: 'Curso de Desenvolvimento Web Completo',
        webdevdescObj: 'Domine Web - 20 cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais',
        javascriptObj: 'Curso de JavaScript',
        javascriptdescObj: 'Neste curso, aprendi o básico e as melhores práticas de JavaScript, como funções, eventos, loops de recursão e muito mais',
        algorithmsObj: 'Curso de Algoritmos e Lógica de Programação',
        algorithmsdescObj: 'Este curso abrange os conceitos de lógica de programação e algoritmos com a ferramenta Portugol Studio',
        htmlcssObj: 'Curso de HTML5 e CSS3',
        htmlcssdescObj: 'Neste curso, aprendi sobre tags HTML5, CSS3, semântica, responsividade, mobile first, formulários, desempenho do site e animações',

        //services
        titleservicesObj: 'Serviços',
        descriptionservicesObj: 'Desenvolvedor Web',
        detailsObj: 'Desenvolvimento com HTML, CSS, JavaScript, SASS, Bootstrap e TypeScript',

        //portfolio
        titleportfolioObj: 'Portfólio',
        projectsObj: 'Meus Últimos Projetos:',

        //contact
        titlecontactObj: 'Entre em Contato',
        subtitlecontactObj: 'Tem alguma dúvida ?',
        messageObj: 'Estou à sua disposição',
        callObj: 'Ligue para mim',
        clickhereObj: 'Clique Aqui',
        emailcontactObj: 'Envie-me um e-mail',
        emailmessageObj: 'Sou muito responsivo às mensagens.',
        nameObj: 'Nome',
        subjectObj: 'Assunto',
        messagesObj: 'Mensagem',
        spanerroObj: 'Preencha este campo antes de enviar',
        emailerroObj: 'Digite um endereço de e-mail válido',
        sendmessageObj: 'Enviar mensagem',

        //settings
        themeObj: 'Cores do Tema',
        colorObj: 'Cor:',
        languageObj: 'Idioma'
    },
    en: {
        //nav
        homeObj: 'Home',
        aboutObj: 'About',
        servicesObj: 'Services',
        portfolioObj: 'Portfolio',
        contactObj: 'Contact',

        //home
        titleObj: 'Welcome',
        subtitleObj: 'Hello, my name is',
        professionObj: "I'm",
        professiondescObj: "I'm web developer front-end with experience in HTML, CSS, SASS, Bootstrap, JavaScript and TypeScript",

        //about
        titleaboutObj: 'About Me',
        descriptionObj: 'Web Developer',
        bioObj: "I'm Brazilian and since I was very young I have always been interested in the IT area, today I am looking to deepen my knowledge even more and I am in constant evolution, both professionally and personally. I always give my best in what I do, because I value the quality of my work and the satisfaction of my clients.",
        birthdayObj: 'Birthday',
        ageObj: 'Age',
        githubObj: 'Github',
        emailObj: 'Email',
        phoneObj: 'Phone',
        cityObj: 'City',
        freelanceObj: 'Freelance',
        downloadCVObj: 'Download CV',
        hireMeObj: 'Hire Me',
        educationObj: 'Education',

        // courses
        typescriptObj: 'TypeScript Course',
        typescriptdescObj: 'Complete TypeScript course, from basic to advanced, with over 70 lessons',
        webdevObj: 'Complete Web Development Course',
        webdevdescObj: 'Master Web - 20 courses - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC and much more',
        javascriptObj: 'JavaScript Course',
        javascriptdescObj: 'In this course, I learned the basics and best practices of JavaScript, such as functions, events, recursion loops, and much more',
        algorithmsObj: 'Algorithms and Programming Logic Course',
        algorithmsdescObj: 'This course covers programming logic and algorithms concepts with the Portugol Studio tool',
        htmlcssObj: 'HTML5 and CSS3 Course',
        htmlcssdescObj: 'In this course, I learned about HTML5 tags, CSS3, semantics, responsiveness, mobile-first, forms, site performance, and animations',

        //services
        titleservicesObj: 'Services',
        descriptionservicesObj: 'Web Developer',
        detailsObj: 'Development with HTML, CSS, JavaScript, SASS, Bootstrap, and TypeScript',

        //portfolio
        titleportfolioObj: 'Portfolio',
        projectsObj: 'My Latest Projects:',

        //contact
        titlecontactObj: 'Contact',
        subtitlecontactObj: 'Have any questions ?',
        messageObj: 'I am at your disposal',
        callObj: 'Call Me',
        emailcontactObj: 'Send Me An Email',
        emailmessageObj: "I'm Very Responsive To Messages",
        clickhereObj: 'Click Here',
        nameObj: 'Name',
        subjectObj: 'Subject',
        messagesObj: 'Message',
        spanerroObj: 'Fill this field before sending',
        emailerroObj: 'Enter a valid email address',
        sendmessageObj: 'Send Message',

        //settings
        themeObj: 'Theme Colors',
        colorObj: 'Color:',
        languageObj: 'Language'
    },
    es: {
        //nav
        homeObj: 'Inicio',
        aboutObj: 'Sobre Mí',
        servicesObj: 'Servicios',
        portfolioObj: 'Portafolio',
        contactObj: 'Contacto',

        //home
        titleObj: 'Bienvenido',
        subtitleObj: 'Hola, mi nombre es',
        professionObj: 'Soy',
        professiondescObj: 'Soy desarrollador web front-end con experiencia en HTML, CSS, SASS, Bootstrap, JavaScript y TypeScript',

        //about
        titleaboutObj: 'Sobre Mí',
        descriptionObj: 'Desarrollador Web',
        bioObj: 'Soy brasileño y desde muy joven siempre me interesé por el área de TI, hoy busco profundizar aún más mis conocimientos y estoy en constante evolución, tanto profesional como personal. Siempre doy lo mejor de mí en lo que hago, porque valoro la calidad de mi trabajo y la satisfacción de mis clientes.',
        birthdayObj: 'Fecha de nacimiento',
        ageObj: 'Edad',
        githubObj: 'Github',
        emailObj: 'Email',
        phoneObj: 'Teléfono',
        cityObj: 'Ciudad',
        freelanceObj: 'Freelancer',
        downloadCVObj: 'Descargar CV',
        hireMeObj: 'Contrátame',
        educationObj: 'Educación',

        // courses
        typescriptObj: 'Curso de TypeScript',
        typescriptdescObj: 'Curso completo de TypeScript, desde lo básico hasta lo avanzado, con más de 70 clases',
        webdevObj: 'Curso de Desarrollo Web Completo',
        webdevdescObj: 'Domine Web - 20 cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC y mucho más',
        javascriptObj: 'Curso de JavaScript',
        javascriptdescObj: 'En este curso, aprendí lo básico y las mejores prácticas de JavaScript, como funciones, eventos, loops de recursión y mucho más',
        algorithmsObj: 'Curso de Algoritmos y Lógica de Programación',
        algorithmsdescObj: 'Este curso abarca los conceptos de lógica de programación y algoritmos con la herramienta Portugol Studio',
        htmlcssObj: 'Curso de HTML5 y CSS3',
        htmlcssdescObj: 'En este curso, aprendí sobre etiquetas HTML5, CSS3, semántica, responsividad, mobile first, formularios, rendimiento del sitio y animaciones',

        //services
        titleservicesObj: 'Servicios',
        descriptionservicesObj: 'Desarrollador Web',
        detailsObj: 'Desarrollo con HTML, CSS, JavaScript, SASS, Bootstrap y TypeScript',

        //portfolio
        titleportfolioObj: 'Portafolio',
        projectsObj: 'Mis Últimos Proyectos:',

        //contact
        titlecontactObj: 'Contacto',
        subtitlecontactObj: '¿ Tiene alguna pregunta ?',
        messageObj: 'Estoy a su disposición',
        callObj: 'Llamame',
        emailcontactObj: 'Envíame un correo electrónico',
        emailmessageObj: 'Soy Muy Responsable A Los Mensajes',
        clickhereObj: 'Haga Clic Aquí',
        nameObj: 'Nombre',
        subjectObj: 'Asunto',
        messagesObj: 'Mensaje',
        spanerroObj: 'Rellena este campo antes de enviar',
        emailerroObj: 'Introduzca una dirección de correo electrónico válida',
        sendmessageObj: 'Enviar mensaje',

        //settings
        themeObj: 'Colores del Tema',
        colorObj: 'Color:',
        languageObj: 'Idioma'
    }
}

type Language = "pt" | "en" | "es";

const updateTranslations = (lang: Language) => {
    Object.keys(translations[lang]).forEach((key: string) => {
        let element = document.getElementById(key) as HTMLElement
        let spanErro = document.querySelectorAll('.spanerroObj') as NodeListOf <HTMLSpanElement>
        let clickHere = document.querySelectorAll('.clickhereObj') as NodeListOf <HTMLAnchorElement>
        if (element) {
            element.innerHTML = translations[lang][key];
        }
        if (spanErro) {
            spanErro.forEach(item => {
                if (item.classList.contains(key)) {
                    item.innerHTML = translations[lang][key];
                }
            })
        }

        if (clickHere) {
            clickHere.forEach(item => {
                if (item.classList.contains(key)) {
                    item.innerHTML = translations[lang][key];
                }
            })
        }
    });
};