(function () {
  var scripts = document.currentScript;
  var base = scripts && scripts.getAttribute('data-base');
  if (!base && scripts && scripts.src) {
    base = scripts.src.replace(/i18n\.js(\?.*)?$/, 'i18n/');
  }
  if (!base) base = 'i18n/';
  var parts = (scripts && scripts.getAttribute('data-parts') || 'shared').split(/\s+/).filter(Boolean);
  parts.push('core');
  var i = 0;
  function loadNext() {
    if (i >= parts.length) return;
    var s = document.createElement('script');
    s.src = base + parts[i] + '.js';
    s.onload = function () { i++; loadNext(); };
    s.onerror = function () { console.error('i18n load failed:', s.src); };
    document.head.appendChild(s);
  }
  loadNext();
})();
