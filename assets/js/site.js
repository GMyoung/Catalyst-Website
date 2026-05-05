const navToggle = document.querySelector('[data-menu-toggle]');
const siteNav = document.querySelector('[data-site-nav]');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });
}

document.querySelectorAll('[data-project-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const script = document.querySelector('script[src$="assets/js/site.js"]');
    const siteRoot = script ? new URL('../../', script.src).href : new URL('/', window.location.href).href;
    window.location.href = new URL('thank-you/', siteRoot).href;
  });
});
