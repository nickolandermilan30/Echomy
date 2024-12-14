function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    nav.classList.toggle('active');
}

function redirectToLogin() {
    // Replace with your login page URL
    window.location.href = '/';
}

const landSpaceBox = document.querySelector('.land-space-box');
let startX, scrollLeft, isDown = false;

// Detect touch start
landSpaceBox.addEventListener('touchstart', (e) => {
    isDown = true; // Track swipe activity
    startX = e.touches[0].pageX;
    scrollLeft = landSpaceBox.scrollLeft;
    landSpaceBox.style.scrollBehavior = 'auto'; // Disable smooth scrolling during swipe
});

// Detect touch move
landSpaceBox.addEventListener('touchmove', (e) => {
    if (!isDown) return; // Ignore move events without active touch
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5; // Adjust scroll sensitivity
    landSpaceBox.scrollLeft = scrollLeft + walk;
});

// End swipe and add momentum
landSpaceBox.addEventListener('touchend', () => {
    isDown = false; // End swipe activity
    landSpaceBox.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling
});


