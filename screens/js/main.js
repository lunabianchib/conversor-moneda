// MOSTRAR Y OCULTAR MENÚ
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

// MOSTRAR MENÚ
// validar si existe
if(navToggle){
        navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
        });
};

// OCULTAR MENÚ
// validar si existe
if(navClose){
        navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
        });
}

// ---------------------QUITAR MENÚ AL HACER CLICK A UN ELEMENTO----------------------
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
        // Cuando clickeamos en cada nav link, removemos el show-menu
        navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// --------------- AGREGAR SOMBRA AL SCROLL---------------

function scrollHeader(){
    const nav = document.getElementById('header');

    if(window.scrollY > 100){
            nav.classList.add('scroll-header');
    }else{
            nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


// ---------------------SCROLL ANIMATION----------------------

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
     //reset: true
});

sr.reveal('.home-data, .about-img, .section-title, .section-subtitle',{}); 
sr.reveal('.home-img, .about-subtitle, .about-text, .skills-subtitle',{delay: 400}); 
sr.reveal('.home-social-icon, .home-scroll, .button, .about-data',{ interval: 200}); 
sr.reveal('.skills-data, .work-img, .contact-content, .proyecto, .experience-tabs, .experience-sections, .skill-box',{interval: 200});
