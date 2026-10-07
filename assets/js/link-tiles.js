// Turns the Markdown lists on link pages into square tiles.
// Expected item format: * [Title](https://example.com/): optional note
(function () {
  'use strict';

  var lists = document.querySelectorAll('section > ul');
  Array.prototype.forEach.call(lists, function (ul) {
    var tiles = document.createElement('div');
    tiles.className = 'link-tiles';

    var items = Array.prototype.slice.call(ul.children);
    var converted = items.every(function (li) {
      return li.tagName === 'LI' && li.querySelector('a');
    });
    if (!converted) {
      return;
    }

    items.forEach(function (li) {
      var source = li.querySelector('a');
      var tile = document.createElement('a');
      tile.className = 'link-tile';
      tile.href = source.href;
      tile.target = '_blank';
      tile.rel = 'noopener noreferrer';

      var title = document.createElement('span');
      title.className = 'link-tile__title';
      title.textContent = source.textContent;
      tile.appendChild(title);

      var note = '';
      var node = source.nextSibling;
      while (node) {
        note += node.textContent;
        node = node.nextSibling;
      }
      note = note.replace(/^\s*[:：]\s*/, '').trim();
      if (note) {
        var noteEl = document.createElement('span');
        noteEl.className = 'link-tile__note';
        noteEl.textContent = note;
        tile.appendChild(noteEl);
      }

      tiles.appendChild(tile);
    });

    ul.parentNode.replaceChild(tiles, ul);
  });
})();
