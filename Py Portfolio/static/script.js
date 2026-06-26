// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  if (cursorGlow) {
    cursorGlow.style.left = (mouseX - 15) + 'px';
    cursorGlow.style.top = (mouseY - 15) + 'px';
    cursorGlow.classList.add('active');
  }
});

document.addEventListener('mouseleave', () => {
  if (cursorGlow) cursorGlow.classList.remove('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll('.bg-shape');
  
  shapes.forEach((shape, index) => {
    shape.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0001})`;
  });
});

// Add stagger animation to cards on load
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.setProperty('--delay', (index * 0.1) + 's');
  });
  
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.setProperty('--delay', (index * 0.1) + 's');
  });
  
  const contactBtns = document.querySelectorAll('.contact-btn');
  contactBtns.forEach((btn, index) => {
    btn.style.setProperty('--delay', (index * 0.15) + 's');
  });
});

// Interactive button feedback
document.querySelectorAll('.btn, .card-link, .contact-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = '';
    }, 100);
  });
});

// Add glow effect on button hover
document.querySelectorAll('.btn-primary, .card').forEach(el => {
  el.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 30px rgba(56,189,248,0.3)';
  });
  
  el.addEventListener('mouseleave', function() {
    this.style.boxShadow = '';
  });
});

// Scroll progress indicator
const createScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / docHeight);
  
  if (scrolled > 0.1) {
    document.body.style.setProperty('--scroll-progress', scrolled);
  }
};

window.addEventListener('scroll', createScrollProgress);

// Animate numbers on scroll (if you add counters)
const animateValue = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Performance optimization: Throttle scroll events
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      createScrollProgress();
      ticking = false;
    });
    ticking = true;
  }
});
