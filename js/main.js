//Navigation through sections
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    for(let navLink of navLinks) {
        navLink.addEventListener('click', scrollToSection);
    }
}

/*Anime Scroll*/
const sections =  document.querySelectorAll('.js-scroll');
const partOfScreen = window.innerHeight*0.6;

function animeScroll() {
    for(let section of sections) {
        const sectionTop = section.getBoundingClientRect().top - partOfScreen;
        if(sectionTop < 0) {
            section.classList.add('active');
        }
        else {
            section.classList.remove('active');
        }
    }
}
window.addEventListener('scroll', animeScroll );

// Toggle Button
function btnToggle() {
    const toggleBtn = document.querySelector('.btn-toggle');
    const navMobile = document.querySelector('.nav-mobile');
    const btnToggle = document.querySelector('.btn-toggle');
    btnToggle.addEventListener('click', () => {
        btnToggle.classList.toggle('open');
        navMobile.classList.toggle('open');
    });
}

//Button - Go to projects
function goToProjects() {
    const goToProjects = document.querySelector('#goToProjects');
    const projects =  document.querySelector('#projects');

    goToProjects.addEventListener('click', () => {
        projects.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}

btnToggle();
goToProjects();
initSmoothScroll();
animeScroll()


