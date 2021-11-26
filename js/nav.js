const navSlide = () =>{
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.nav-burger');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('show-nav');
        burger.classList.toggle('toggle-burger');
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `fadeIn .5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    })
}

navSlide();