// script.js

// Navbar fade-out on scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  lastScroll = currentScroll;
});


// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block"; // Show the button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide the button
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll to the top
  });
};


const contactSection = document.getElementById('contact');

function handleScroll() {
  const sectionTop = contactSection.offsetTop;
  const scrollPosition = window.pageYOffset;

  // Adjust the offset as needed 
  if (scrollPosition > sectionTop - window.innerHeight / 2) { 
    contactSection.classList.add('show');
    window.removeEventListener('scroll', handleScroll);
  }
}

window.addEventListener('scroll', handleScroll);

function downloadResume() {
  // Replace 'your_resume.pdf' with the actual path to your resume file
  const link = document.createElement('a');
  link.href = 'Momna Ali - Resume.pdf'; 
  link.download = 'Momna Ali - Resume.pdf'; // Optional: Specify a filename for download
  link.click();
}