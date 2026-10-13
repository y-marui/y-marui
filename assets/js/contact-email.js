// Reveals the support email address only after a click, so scrapers that read
// the page source or run scripts on load do not collect it.
(function () {
  'use strict';

  var encoded = 'eXVraWhpcm8tY2hyb21lLXdlYi1zdG9yZS1zdXBwb3J0QGdvb2dsZWdyb3Vwcy5jb20=';

  Array.prototype.forEach.call(document.querySelectorAll('[data-contact-email]'), function (slot) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'contact-email__button';
    button.textContent = 'Show email address';
    button.addEventListener('click', function () {
      var address = window.atob(encoded);
      var link = document.createElement('a');
      link.href = 'mailto:' + address;
      link.textContent = address;
      slot.textContent = '';
      slot.appendChild(link);
    });
    slot.textContent = '';
    slot.appendChild(button);
  });
})();
