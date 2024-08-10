console.log('debug');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');

// Function to toggle navigation
function toggleNav(event) {
    event.preventDefault(); // Prevent any default behavior
    console.log('toggling nav');

    nav.classList.toggle('nav-active');
}

// Check if the device is touch-enabled
const isTouchDevice = 'ontouchstart' in document.documentElement;

if (isTouchDevice) {
    // For touch devices
    hamburger.addEventListener('touchstart', toggleNav);
    closeIcon.addEventListener('touchstart', toggleNav);
} else {
    // For non-touch devices (desktop)
    hamburger.addEventListener('click', toggleNav);
    closeIcon.addEventListener('click', toggleNav);
}