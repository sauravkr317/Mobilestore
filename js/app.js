
const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    resetProgress: false
});
splide.mount();

let list = document.querySelector('.list');
let hamburger = document.querySelector('.hamburger');
console.log()
hamburger.addEventListener('click', () => {
    if (list.className.includes('show')) {
        hamburger.firstElementChild.firstElementChild.classList.remove('fa-times');
        hamburger.firstElementChild.firstElementChild.classList.add('fa-bars');
        list.classList.remove('show');
    } else {
        list.classList.add('show');
        hamburger.firstElementChild.firstElementChild.classList.remove('fa-bars');
        hamburger.firstElementChild.firstElementChild.classList.add('fa-times');
    }
})