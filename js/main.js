// Fade-in observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade, .section, .hero, .service-card, footer").forEach((el) => {
  observer.observe(el);
});

// Scroll shimmer effect
const goldHeaders = document.querySelectorAll(".gold-gradient");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + window.innerHeight;
  goldHeaders.forEach((header) => {
    const rect = header.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    if (scrollY > top + rect.height / 3 && scrollY < top + rect.height * 3) {
      header.classList.add("highlighted");
    } else {
      header.classList.remove("highlighted");
    }
  });
});
// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

