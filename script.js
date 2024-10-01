// Optionally add interactivity to enhance the user experience
document.addEventListener('DOMContentLoaded', function() {
  // Example: Scroll smoothly to sections when nav links are clicked
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
