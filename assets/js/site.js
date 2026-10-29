// Preserve external-link behavior without a remotely loaded JavaScript library.
(function () {
  'use strict';
  var menu = document.querySelector('.nav-menu');
  var narrow = window.matchMedia('(max-width: 1200px)');
  function updateMenu() { menu.open = !narrow.matches; }
  updateMenu();
  narrow.addEventListener('change', updateMenu);

  document.querySelectorAll('.page-menu').forEach(function (toc) {
  toc.addEventListener('pointerenter', function (event) {
    if (event.pointerType === 'mouse' && !narrow.matches) toc.open = true;
  });
  toc.addEventListener('pointerleave', function (event) {
    if (event.pointerType === 'mouse' && !narrow.matches && !toc.contains(document.activeElement)) toc.open = false;
  });
  toc.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      toc.open = false;
      toc.querySelector('summary').focus();
    }
  });
  toc.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { toc.open = false; });
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
