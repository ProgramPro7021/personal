// Get all the links in the navigation menu
const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Remove the 'active' class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    link.classList.add('active');

    // Get the section id from the link's href attribute
    const sectionId = link.getAttribute('href');

    // Scroll to the corresponding section
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Highlight the current section's link on page load
window.addEventListener('load', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (window.pageYOffset >= top && window.pageYOffset < bottom) {
      const sectionId = '#' + section.getAttribute('id');
      const correspondingLink = document.querySelector(`nav a[href="${sectionId}"]`);
      correspondingLink.classList.add('active');
    }
  });
});

// Highlight the current section's link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (window.pageYOffset >= top && window.pageYOffset < bottom) {
      const sectionId = '#' + section.getAttribute('id');
      const correspondingLink = document.querySelector(`nav a[href="${sectionId}"]`);
      correspondingLink.classList.add('active');
    } else {
      const sectionId = '#' + section.getAttribute('id');
      const correspondingLink = document.querySelector(`nav a[href="${sectionId}"]`);
      correspondingLink.classList.remove('active');
    }
  });
});



