document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
  }

  // Close mobile menu on link click
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(10, 10, 12, 0.9)';
      header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.background = 'rgba(10, 10, 12, 0.7)';
      header.style.boxShadow = 'none';
    }
  });

  // Intersection Observer for Scroll Animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Run animation once
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));

  // Custom Cursor Glow Effect
  const cursorGlow = document.getElementById('cursor-glow');
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // Form handling enhancement
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Basic simulation of sending
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerText;
      btn.innerText = 'Sending...';
      btn.style.opacity = '0.7';
      
      setTimeout(() => {
        formMsg.innerHTML = '<span style="color: #4cd137;">Thank you! Your request has been sent. We will contact you shortly.</span>';
        form.reset();
        btn.innerText = originalText;
        btn.style.opacity = '1';
        setTimeout(() => formMsg.innerHTML = '', 5000);
      }, 1500);
    });
  }
});
