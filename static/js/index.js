const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

closeIcon.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})