/*toogle icon bar */
let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*adding removing active */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            });
        };
    });
    /*scroll section active link*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY >100);
/*remove toggle icon and navbar when clicked navbar*/
menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*scrollreveal*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:1500,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio,.contact form', { origin:'bottom'});