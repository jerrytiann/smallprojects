const navSlide = () => {
    const mobile_nav = document.querySelector('.mobile-nav');
    const nav = document.querySelector('.nav-links');

    mobile_nav.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}


const app = ()=> {
    navSlide();
}

app();