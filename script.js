document.querySelector('#download-cv').addEventListener('click', function () {
    alert('CV download initiated!');

    // Create a hidden link element
    const link = document.createElement('a');
    link.href = 'Images/ZisandaNodaliCV.pdf'; // update path if needed
    link.download = 'Zisanda-Nodali-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
window.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('.top-bar');
    const header = document.querySelector('header');

    if (topBar && header) {
      const navHeight = topBar.offsetHeight;
      header.style.marginTop = navHeight + 'px';
    }
 });
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('show');
}