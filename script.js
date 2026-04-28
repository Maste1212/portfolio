// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const sidebar = document.getElementById('sidebar');

mobileNavToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar when clicking a link on mobile
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all
    navLinks.forEach(l => l.classList.remove('active'));
    // Add to clicked
    this.classList.add('active');
    
    // Close sidebar on mobile
    if(window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});

// Typing animation for hero text
const text = "Building clean and responsive web experiences";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 80);
  } else {
    // Optional: blink cursor or looping
    typingText.innerHTML += '<span class="cursor" style="animation: blink 1s infinite;">|</span>';
  }
}

// Add blinking animation via JS dynamically or rely on CSS. 
// Adding small CSS here for cursor blink
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(style);

window.onload = type;

// Form submission to Github (as requested: "send into the github")
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Redirecting to my GitHub profile...");
    window.open(this.action, '_blank');
    this.reset();
  });
}

// Scroll Reveal Animation & Active Nav Link Highlight
function revealAndHighlight() {
  const reveals = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('section');
  const navLinksList = document.querySelectorAll('.nav-link');
  
  // Reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((element) => {
    revealObserver.observe(element);
  });

  // Active Nav Link highlighting
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active class from all
        navLinksList.forEach(link => link.classList.remove('active'));
        
        // Find corresponding link and add active
        const id = entry.target.getAttribute('id');
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  sections.forEach((section) => {
    navObserver.observe(section);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', revealAndHighlight);
