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
// Nav dropdowns toggle
document.querySelectorAll('.nav-item--dropdown').forEach(dropdownItem => {
  const dropdownBtn = dropdownItem.querySelector('.nav-dropdown-btn');
  if (!dropdownBtn) return;

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = dropdownItem.classList.toggle('is-open');
    dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

// Close any open dropdown on outside click
document.addEventListener('click', (e) => {
  document.querySelectorAll('.nav-item--dropdown').forEach(dropdownItem => {
    if (!dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove('is-open');
      const btn = dropdownItem.querySelector('.nav-dropdown-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
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

// Package card collapse (mobile only — process-systems page)
document.querySelectorAll('.ps-card-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.ps-package-card');
    const isOpen = card.classList.contains('is-open');
    if (isOpen) {
      card.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Read more ↓';
    } else {
      card.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = 'Read less ↑';
    }
  });
});

// Clients carousel dots (mobile only)
const clientsTrack = document.getElementById('clientsTrack');
const clientsDots = document.querySelectorAll('.clients-dot');
if (clientsTrack && clientsDots.length) {
  clientsTrack.addEventListener('scroll', () => {
    const cardWidth = clientsTrack.querySelector('.client-card').offsetWidth + 16;
    const index = Math.round(clientsTrack.scrollLeft / cardWidth);
    clientsDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }, { passive: true });

  clientsDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const cardWidth = clientsTrack.querySelector('.client-card').offsetWidth + 16;
      clientsTrack.scrollTo({ left: parseInt(dot.dataset.index) * cardWidth, behavior: 'smooth' });
    });
  });
}

// Service accordion (mobile only)
document.querySelectorAll('.service-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.closest('.service-detail');
    const panel = detail.querySelector('.service-panel');
    const isOpen = detail.classList.contains('is-open');

    if (isOpen) {
      detail.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      panel.style.maxHeight = '0';
    } else {
      detail.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

