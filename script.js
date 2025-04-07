document.querySelector('.hero button').addEventListener('click', function() {
    alert('CV download initiated!');
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Handle scroll event to add the 'visible' class
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#about');
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('visible');
    }
});
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#skills');
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('visible');
    }
});
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('#portfolio');
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('visible');
    }
});