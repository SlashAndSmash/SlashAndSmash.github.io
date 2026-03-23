/* ============================================
   SLASH & SMASH — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---- FAQ Accordion ---- */

  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(this.getAttribute('aria-controls'));

      // Close all others
      document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.hidden = true;
      });

      // Toggle clicked one
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });

  /* ---- Mobile Navigation ---- */

  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
    });
  }

  /* ---- Cookie Consent ---- */

  var banner = document.getElementById('cookie-consent');
  var acceptBtn = document.getElementById('cookie-accept');
  var declineBtn = document.getElementById('cookie-decline');

  if (banner) {
    var consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      banner.style.display = '';
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'accepted');
        banner.style.display = 'none';
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'declined');
        banner.style.display = 'none';
      });
    }
  }
})();
