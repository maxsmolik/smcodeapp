(function () {
  var STORAGE_PREFIX = 'site-lang:';
  var LEGACY_STORAGE_KEY = 'site-lang';
  var LAST_LANG_KEY = 'site-lang:last';

  function mergeTranslations() {
    var langs = ['de', 'en', 'ru'];
    var out = { de: {}, en: {}, ru: {} };
    var parts = window.__siteI18nParts || [];
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      for (var li = 0; li < langs.length; li++) {
        var lang = langs[li];
        var block = part[lang];
        if (!block) continue;
        var keys = Object.keys(block);
        for (var ki = 0; ki < keys.length; ki++) {
          out[lang][keys[ki]] = block[keys[ki]];
        }
      }
    }
    return out;
  }
  var SCOPES = {
    root: { langs: ['de', 'en', 'ru'] },
    urlaubsplaner: { langs: ['de', 'en', 'ru'] },
    wochenbericht: { langs: ['de', 'en', 'ru'] },
    launcher_meetings: { langs: ['de', 'en', 'ru'] }
  };

  var T = mergeTranslations();

  function detectScope() {
    var path = window.location.pathname.replace(/\\/g, '/');
    var parts = path.split('/').filter(Boolean);
    if (parts.length && /\.html$/i.test(parts[parts.length - 1])) {
      parts.pop();
    }
    var section = parts.length ? parts[parts.length - 1] : 'root';
    if (SCOPES[section]) {
      return section;
    }
    return 'root';
  }

  function scopeLangs(scope) {
    return (SCOPES[scope] && SCOPES[scope].langs) || SCOPES.root.langs;
  }

  function isSupported(scope, lang) {
    return scopeLangs(scope).indexOf(lang) !== -1;
  }

  function langFromBrowser(scope) {
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];

    for (var i = 0; i < langs.length; i++) {
      var code = langs[i].toLowerCase().split('-')[0];
      if (isSupported(scope, code)) {
        return code;
      }
    }

    return scopeLangs(scope).indexOf('en') !== -1 ? 'en' : scopeLangs(scope)[0];
  }

  function readStoredLang(scope) {
    var saved = localStorage.getItem(STORAGE_PREFIX + scope);
    if (saved && isSupported(scope, saved)) {
      return saved;
    }

    if (scope === 'root') {
      var legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacy && isSupported(scope, legacy)) {
        return legacy;
      }
    }

    var lastLang = localStorage.getItem(LAST_LANG_KEY);
    if (lastLang && isSupported(scope, lastLang)) {
      return lastLang;
    }

    if (scope !== 'root') {
      var rootLang = localStorage.getItem(STORAGE_PREFIX + 'root');
      if (!rootLang && localStorage.getItem(LEGACY_STORAGE_KEY)) {
        rootLang = localStorage.getItem(LEGACY_STORAGE_KEY);
      }
      if (rootLang && isSupported(scope, rootLang)) {
        return rootLang;
      }
    }

    return null;
  }

  function detectLocale(scope) {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = params.get('lang');
    if (fromQuery && isSupported(scope, fromQuery)) {
      return fromQuery;
    }

    var stored = readStoredLang(scope);
    if (stored) {
      return stored;
    }

    return langFromBrowser(scope);
  }

  var scope = detectScope();

  function t(lang, key, vars) {
    var table = T[lang] || T.en;
    var text = table[key] != null ? table[key] : (T.en[key] || key);
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        text = text.replace('{' + name + '}', vars[name]);
      });
    }
    return text;
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(lang, el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var vars = {};
      var n = el.getAttribute('data-i18n-n');
      if (n) vars.n = n;
      var text = t(lang, key, vars);
      if (el.tagName === 'IMG') {
        el.setAttribute('alt', text);
      } else {
        el.setAttribute('aria-label', text);
      }
    });

    var switcher = document.querySelector('.lang-switcher');
    if (switcher) {
      switcher.setAttribute('aria-label', t(lang, 'lang.label'));
    }

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      document.title = t(lang, el.getAttribute('data-i18n-title'));
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta && meta.hasAttribute('data-i18n-content')) {
      meta.setAttribute('content', t(lang, meta.getAttribute('data-i18n-content')));
    }

    document.querySelectorAll('.lang-switcher button').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (!isSupported(scope, lang)) return;
    localStorage.setItem(STORAGE_PREFIX + scope, lang);
    localStorage.setItem(LAST_LANG_KEY, lang);
    if (scope === 'root') {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    }
    currentLang = lang;
    applyLang(lang);
  }

  function initSwitcher() {
    var headerInner = document.querySelector('.header .container');
    if (!headerInner || document.querySelector('.lang-switcher')) return;

    var nav = document.createElement('nav');
    nav.className = 'lang-switcher';
    nav.setAttribute('aria-label', t(currentLang, 'lang.label'));

    scopeLangs(scope).forEach(function (code) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-btn';
      btn.setAttribute('data-lang', code);
      btn.textContent = code.toUpperCase();
      btn.addEventListener('click', function () {
        setLang(code);
      });
      nav.appendChild(btn);
    });

    var wrap = document.createElement('div');
    wrap.className = 'header-lang';
    wrap.appendChild(nav);
    headerInner.insertBefore(wrap, headerInner.firstChild);
  }

  var currentLang = detectLocale(scope);
  initSwitcher();
  applyLang(currentLang);

  window.SiteI18n = {
    scope: scope,
    setLang: setLang,
    t: function (key, vars) { return t(currentLang, key, vars); }
  };
})();
