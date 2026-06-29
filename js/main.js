// main.js — Berends Arbo & Veiligheid BV

(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');
  var nav    = document.getElementById('main-nav');

  /* ----------------------------------------------------------
     Mobile nav toggle
     ---------------------------------------------------------- */
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label',    isOpen ? 'Menu sluiten' : 'Menu openen');
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label',    'Menu openen');
      });
    });
  }

  /* ----------------------------------------------------------
     Scroll-aware header

     Only activates on pages that have a hero section (currently
     the homepage). Adds .header--has-hero to make the header
     transparent over the dark hero, then adds .is-scrolled once
     the user scrolls past the hero area to restore the white bar.
     ---------------------------------------------------------- */
  if (header && document.getElementById('hero')) {
    header.classList.add('header--has-hero');

    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

}());
