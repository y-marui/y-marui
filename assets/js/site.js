// Preserve external-link behavior without a remotely loaded JavaScript library.
(function () {
  'use strict';
  var menu = document.querySelector('.nav-menu');
  var narrow = window.matchMedia('(max-width: 1200px)');
  function updateMenu() { menu.open = !narrow.matches; }
  updateMenu();
  narrow.addEventListener('change', updateMenu);
  var menuToggle = menu.querySelector(':scope > summary');
  function updateMenuLabel() {
    menuToggle.setAttribute('aria-label', menu.open ? 'Close menu' : 'Open menu');
  }
  menu.addEventListener('toggle', updateMenuLabel);
  updateMenuLabel();
  menu.addEventListener('click', function (event) {
    if (narrow.matches && event.target.closest('a')) menu.open = false;
  });
  document.addEventListener('click', function (event) {
    if (narrow.matches && !menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && narrow.matches && menu.open) {
      menu.open = false;
      menuToggle.focus();
    }
  });

  document.querySelectorAll('.page-menu').forEach(function (item) {
    var sections = item.querySelector('.section-menu');
    item.addEventListener('pointerenter', function (event) {
      if (event.pointerType === 'mouse') sections.open = true;
    });
    item.addEventListener('pointerleave', function (event) {
      if (event.pointerType === 'mouse' && !item.contains(document.activeElement)) sections.open = false;
    });
    item.addEventListener('focusin', function () {
      if (window.matchMedia('(hover: hover)').matches) sections.open = true;
    });
    item.addEventListener('focusout', function (event) {
      if (!item.contains(event.relatedTarget)) sections.open = false;
    });
    item.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && sections.open) {
        item.querySelector('.page-parent').focus();
        sections.open = false;
        event.stopPropagation();
      }
    });
    sections.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { sections.open = false; });
    });
  });

  document.querySelectorAll('a[href]').forEach(function (link) {
    var url = new URL(link.href, window.location.href);
    var productHomeLink = document.body.dataset.pageUrl === '/' &&
      link.closest('.page-body') && url.pathname.indexOf('/products/') !== -1 && !url.hash;
    if (productHomeLink || ((url.protocol === 'https:' || url.protocol === 'http:') &&
        url.origin !== window.location.origin &&
        !link.closest('.site-footer'))) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });
})();
