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

// Replace the scroll event listener with Intersection Observer for smoother performance
document.addEventListener('DOMContentLoaded', function() {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // When skills section is in viewport
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      // Options for the observer
      threshold: 0.2, // When 20% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Triggers a bit before the element is fully in view
    });
  
    // Select the skills section by ID and start observing it
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  });
  
  // You can remove the isInViewport function as it's no longer needed
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