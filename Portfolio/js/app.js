function initButtonProjects() {
    const goToProjects = document.querySelector('#toProjects');
    const projectsSection = document.querySelector('#projects');
    goToProjects.addEventListener('click', ()=> {
        projectsSection.scrollIntoView({
            behavior:'smooth',
            block:'start',
        });
    });
}
initButtonProjects();

/*****************************************************************************/
/***Animation - About Me Section ***/
function initAnimationProfilePicture () {
    const profilePicture = document.querySelector('.profile-picture');
    const borderPicture = document.querySelector('.border-picture');

    profilePicture.addEventListener('mouseover', ( ) => {
        const picture = document.querySelector('.picture');
        picture.classList.add('animation-state');
    });

    profilePicture.addEventListener('mouseout', ( ) => {
        const picture = document.querySelector('.picture');
        picture.classList.remove('animation-state');
    });
}
initAnimationProfilePicture();
/*****************************************************************************/
/*Smooth scroll*/
function initSmoothScroll () {
    const navLinks = document.querySelectorAll('.nav-link');

    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior:'smooth',
            block:'start',
        });
    }

    for(let navLink of navLinks) {
        navLink.addEventListener('click', scrollToSection );
    }
}
initSmoothScroll ();

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