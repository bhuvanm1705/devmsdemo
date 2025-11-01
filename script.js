document.addEventListener('DOMContentLoaded', function () {
  // Nav toggle for small screens
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  navToggle.addEventListener('click', function () {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (siteNav.classList.contains('open')) siteNav.classList.remove('open');
      }
    });
  });

  // Current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple contact form validation
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      msg.textContent = 'Please fill all fields.';
      msg.style.color = '#b91c1c';
      return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = '#b91c1c';
      return;
    }

    msg.textContent = 'Message sent — thanks! (Demo only)';
    msg.style.color = '#0f5132';
    form.reset();
  });
});
