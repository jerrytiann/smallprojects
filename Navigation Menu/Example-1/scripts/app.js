const navSlide = () => {
    const mobile_nav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    mobile_nav.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-menu-active');

        mobile_nav.classList.toggle('nav-menu-toggle');

        //Animate links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });


}


const app = () => {
    navSlide();
}

app();