(function () {
  var STORAGE_KEY = 'site-lang';
  var SUPPORTED = ['de', 'en', 'ru'];

  var T = {
    de: {
      'lang.label': 'Sprache',
      'nav.home': 'Startseite',
      'nav.apps': '← Alle Apps',
      'nav.privacy': 'Datenschutz',
      'btn.more': 'Mehr erfahren',
      'btn.play': 'Google Play',

      'index.title': 'Meine Apps',
      'index.meta': 'Urlaubstage-Planer und Wochenbericht — Android-Apps von Smolik Maksim',
      'index.subtitle': 'Nützliche Android-Apps für Arbeit und Freizeit',
      'index.urlaubsplaner.meta': 'Vacation Planner · Urlaubsplaner',
      'index.urlaubsplaner.desc': 'Jahres-Urlaubsplaner: Feiertage nach Bundesland, Widget, DE / RU / EN.',
      'index.wochenbericht.meta': 'Arbeitszeiterfassung · Zeiterfassung',
      'index.wochenbericht.desc': 'Arbeitszeiterfassung für Monteure und Elektriker mit PDF-Export.',

      'urlaubsplaner.title': 'Urlaubstage-Planer',
      'urlaubsplaner.meta': 'Urlaubstage-Planer — Android-Urlaubsplaner',
      'urlaubsplaner.subtitle': 'Vacation Planner · Urlaubsplaner',
      'urlaubsplaner.intro': 'Jahres-Urlaubsplaner mit hellem und dunklem Design. Offline-Feiertage in Deutschland nach Bundesland, optional Schulferien (OpenHolidays API, lokal zwischengespeichert).',
      'urlaubsplaner.f1': 'Raster 2×6 oder vertikales Monatsband',
      'urlaubsplaner.f2': 'Ganze und halbe Urlaubstage, Kategorien per Langdruck',
      'urlaubsplaner.f3': 'Urlaubssaldo mit Übertrag ins nächste Jahr',
      'urlaubsplaner.f4': 'Regionale und bundesweite Feiertage',
      'urlaubsplaner.f5': 'Startbildschirm-Widget: Countdown bis zum Urlaub',
      'urlaubsplaner.f6': 'Lokalisierung DE / RU / EN',
      'urlaubsplaner.note': 'Kein Konto — Daten nur auf dem Gerät.',
      'urlaubsplaner.screenshots': 'Screenshots',
      'urlaubsplaner.carousel': 'Screenshots',
      'urlaubsplaner.prev': 'Vorheriges Bild',
      'urlaubsplaner.next': 'Nächstes Bild',
      'urlaubsplaner.dots': 'Screenshot-Auswahl',
      'urlaubsplaner.shot': 'Urlaubstage-Planer — Screenshot {n}',

      'wochenbericht.title': 'Wochenbericht',
      'wochenbericht.meta': 'Wochenbericht — Arbeitszeiterfassung für Android',
      'wochenbericht.subtitle': 'Arbeitszeiterfassung · Zeiterfassung',
      'wochenbericht.desc': 'Arbeitszeiterfassung für Monteure und Elektriker: Stunden pro Tag, mehrere Baustellen am Tag, Überstundenberechnung, Verlauf und PDF-Export. JSON-Backup nur auf Wunsch.',

      'privacy.title': 'Datenschutz',
      'privacy.meta': 'Datenschutzerklärung für mobile Apps von smcode',
      'privacy.updated': 'Zuletzt aktualisiert: 19. August 2026',
      'privacy.intro.title': 'Einleitung',
      'privacy.intro.p1': 'Diese Datenschutzerklärung beschreibt, wie die mobilen Anwendungen von smcode („wir“, „uns“) mit Informationen umgehen, wenn Sie unsere Apps im Google Play Store nutzen.',
      'privacy.intro.p2': 'Wir respektieren Ihre Privatsphäre. Unsere Apps sind so konzipiert, dass sie auf Ihrem Gerät arbeiten, ohne personenbezogene oder Nutzungsdaten zu sammeln, auf unseren Servern zu speichern oder zu übertragen.',
      'privacy.nocollect.title': 'Welche Daten wir nicht erheben',
      'privacy.nocollect.p': 'Unsere Apps erheben <strong>keine</strong> der folgenden Daten:',
      'privacy.nocollect.l1': 'Personenbezogene Daten (Name, E-Mail, Telefonnummer usw.)',
      'privacy.nocollect.l2': 'Gerätekennungen oder Werbe-IDs',
      'privacy.nocollect.l3': 'Standortdaten',
      'privacy.nocollect.l4': 'Nutzungsanalysen oder Absturzberichte',
      'privacy.nocollect.l5': 'Kontakte, Fotos oder andere Inhalte vom Gerät',
      'privacy.nocollect.l6': 'Zahlungs- oder Finanzdaten',
      'privacy.local.title': 'Lokale Daten auf Ihrem Gerät',
      'privacy.local.p1': 'Unsere Apps können Daten lokal auf Ihrem Gerät speichern, damit sie offline funktionieren (z. B. Einstellungen, Einträge oder von Ihnen erstellte Datensätze).',
      'privacy.local.p2': 'Diese Daten verlassen Ihr Gerät nur, wenn Sie sie ausdrücklich exportieren oder teilen (z. B. Datei exportieren oder System-Teilen-Dialog). Wir haben keinen Zugriff darauf; sie werden nicht automatisch an unsere Server oder externe Dienste gesendet.',
      'privacy.share.title': 'Weitergabe von Daten',
      'privacy.share.p': 'Wir geben keine Daten an Dritte weiter, weil wir keine Daten erheben. Unsere Apps nutzen keine Analyse-, Werbe- oder Tracking-SDKs.',
      'privacy.children.title': 'Kinder',
      'privacy.children.p': 'Unsere Apps erheben wissentlich keine Informationen von Personen, einschließlich Kindern unter 13 Jahren. Da keine Daten erhoben oder übertragen werden, sind unsere Apps für alle Altersgruppen geeignet.',
      'privacy.changes.title': 'Änderungen',
      'privacy.changes.p': 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Datum veröffentlicht.',
      'privacy.contact.title': 'Kontakt',
      'privacy.contact.p': 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns unter:'
    },

    en: {
      'lang.label': 'Language',
      'nav.home': 'Home',
      'nav.apps': '← All apps',
      'nav.privacy': 'Privacy Policy',
      'btn.more': 'Learn more',
      'btn.play': 'Google Play',

      'index.title': 'My apps',
      'index.meta': 'Urlaubstage-Planer and Wochenbericht — Android apps by Smolik Maksim',
      'index.subtitle': 'Useful Android apps for work and leisure',
      'index.urlaubsplaner.meta': 'Vacation Planner · Urlaubsplaner',
      'index.urlaubsplaner.desc': 'Year-round vacation planner: holidays by Bundesland, widget, DE / RU / EN.',
      'index.wochenbericht.meta': 'Arbeitszeiterfassung · Time tracking',
      'index.wochenbericht.desc': 'Work time tracking for technicians and electricians with PDF export.',

      'urlaubsplaner.title': 'Urlaubstage-Planer',
      'urlaubsplaner.meta': 'Urlaubstage-Planer — Android vacation planner',
      'urlaubsplaner.subtitle': 'Vacation Planner · Urlaubsplaner',
      'urlaubsplaner.intro': 'Year-round vacation planner with light and dark themes. Offline German public holidays by Bundesland, optional school holidays (OpenHolidays API, cached on device).',
      'urlaubsplaner.f1': '2×6 grid or vertical month tape',
      'urlaubsplaner.f2': 'Full and half vacation days, categories via long-press',
      'urlaubsplaner.f3': 'Vacation balance with carryover to the next year',
      'urlaubsplaner.f4': 'Regional and statewide public holidays',
      'urlaubsplaner.f5': 'Home-screen widget: countdown to your next vacation',
      'urlaubsplaner.f6': 'Localization DE / RU / EN',
      'urlaubsplaner.note': 'No account — data stays on your device only.',
      'urlaubsplaner.screenshots': 'Screenshots',
      'urlaubsplaner.carousel': 'Screenshots',
      'urlaubsplaner.prev': 'Previous image',
      'urlaubsplaner.next': 'Next image',
      'urlaubsplaner.dots': 'Screenshot selection',
      'urlaubsplaner.shot': 'Urlaubstage-Planer — screenshot {n}',

      'wochenbericht.title': 'Wochenbericht',
      'wochenbericht.meta': 'Wochenbericht — work time tracking for Android',
      'wochenbericht.subtitle': 'Arbeitszeiterfassung · Time tracking',
      'wochenbericht.desc': 'Work time tracking for technicians and electricians: hours per day, multiple job sites per day, overtime calculation, history, and PDF export. JSON backup only when you choose.',

      'privacy.title': 'Privacy Policy',
      'privacy.meta': 'Privacy Policy for mobile applications by smcode',
      'privacy.updated': 'Last updated: August 19, 2026',
      'privacy.intro.title': 'Introduction',
      'privacy.intro.p1': 'This Privacy Policy describes how the mobile applications developed by smcode ("we", "our", or "us") handle information when you use our apps available on Google Play.',
      'privacy.intro.p2': 'We respect your privacy. Our applications are designed to work on your device without collecting, storing on our servers, or transmitting any personal or usage data.',
      'privacy.nocollect.title': 'Information We Do Not Collect',
      'privacy.nocollect.p': 'Our applications do <strong>not</strong> collect any of the following:',
      'privacy.nocollect.l1': 'Personal information (name, email address, phone number, etc.)',
      'privacy.nocollect.l2': 'Device identifiers or advertising IDs',
      'privacy.nocollect.l3': 'Location data',
      'privacy.nocollect.l4': 'Usage analytics or crash reports',
      'privacy.nocollect.l5': 'Contacts, photos, or other content from your device',
      'privacy.nocollect.l6': 'Payment or financial information',
      'privacy.local.title': 'Local Data on Your Device',
      'privacy.local.p1': 'Our apps may store data locally on your device so they can function offline (for example, settings, entries, or records you create in the app).',
      'privacy.local.p2': 'This data never leaves your device unless you explicitly choose to export or share it (for example, exporting a file or using the system share dialog). We do not have access to this information and it is never sent to our servers or any external services automatically.',
      'privacy.share.title': 'Data Sharing',
      'privacy.share.p': 'We do not share any data with third parties because we do not collect any data. Our apps do not use third-party analytics, advertising SDKs, or tracking services.',
      'privacy.children.title': "Children's Privacy",
      'privacy.children.p': 'Our applications do not knowingly collect information from anyone, including children under the age of 13. Since no data is collected or transmitted, our apps are safe for users of all ages.',
      'privacy.changes.title': 'Changes to This Policy',
      'privacy.changes.p': 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.',
      'privacy.contact.title': 'Contact Us',
      'privacy.contact.p': 'If you have any questions about this Privacy Policy, please contact us at:'
    },

    ru: {
      'lang.label': 'Язык',
      'nav.home': 'Главная',
      'nav.apps': '← Все приложения',
      'nav.privacy': 'Privacy Policy',
      'btn.more': 'Подробнее',
      'btn.play': 'Google Play',

      'index.title': 'Мои приложения',
      'index.meta': 'Urlaubstage-Planer и Wochenbericht — Android-приложения от Smolik Maksim',
      'index.subtitle': 'Полезные Android-приложения для работы и отдыха',
      'index.urlaubsplaner.meta': 'Vacation Planner · Планировщик отпуска',
      'index.urlaubsplaner.desc': 'Годовой планировщик отпусков: праздники по Bundesland, виджет, DE / RU / EN.',
      'index.wochenbericht.meta': 'Arbeitszeiterfassung · Учёт рабочего времени',
      'index.wochenbericht.desc': 'Учёт рабочего времени для монтажников и электриков с PDF-экспортом.',

      'urlaubsplaner.title': 'Urlaubstage-Planer',
      'urlaubsplaner.meta': 'Urlaubstage-Planer — планировщик отпускных дней для Android',
      'urlaubsplaner.subtitle': 'Vacation Planner · Планировщик отпуска',
      'urlaubsplaner.intro': 'Годовой планировщик отпускных дней со светлой и тёмной темой. Офлайн-праздники Германии по федеральным землям, опционально школьные каникулы (OpenHolidays API, кэш на устройстве).',
      'urlaubsplaner.f1': 'Сетка 2×6 или вертикальная лента месяцев',
      'urlaubsplaner.f2': 'Полные и половинные дни отпуска, категории по долгому нажатию',
      'urlaubsplaner.f3': 'Баланс отпуска с переносом на следующий год',
      'urlaubsplaner.f4': 'Региональные и государственные праздники',
      'urlaubsplaner.f5': 'Виджет на главный экран: обратный отсчёт до отпуска',
      'urlaubsplaner.f6': 'Локализация DE / RU / EN',
      'urlaubsplaner.note': 'Без аккаунта — данные только на устройстве.',
      'urlaubsplaner.screenshots': 'Скриншоты',
      'urlaubsplaner.carousel': 'Скриншоты',
      'urlaubsplaner.prev': 'Предыдущий скриншот',
      'urlaubsplaner.next': 'Следующий скриншот',
      'urlaubsplaner.dots': 'Выбор скриншота',
      'urlaubsplaner.shot': 'Urlaubstage-Planer — скриншот {n}',

      'wochenbericht.title': 'Wochenbericht',
      'wochenbericht.meta': 'Wochenbericht — учёт рабочего времени для Android',
      'wochenbericht.subtitle': 'Arbeitszeiterfassung · Учёт рабочего времени',
      'wochenbericht.desc': 'Учёт рабочего времени для монтажников и электриков: ввод часов по дням, несколько объектов в день, расчёт переработок, история и PDF-экспорт. Резервное копирование в JSON — только по вашему выбору.',

      'privacy.title': 'Privacy Policy',
      'privacy.meta': 'Политика конфиденциальности мобильных приложений smcode',
      'privacy.updated': 'Последнее обновление: 19 августа 2026',
      'privacy.intro.title': 'Введение',
      'privacy.intro.p1': 'Эта политика конфиденциальности описывает, как мобильные приложения smcode («мы») обрабатывают информацию при использовании наших приложений в Google Play.',
      'privacy.intro.p2': 'Мы уважаем вашу конфиденциальность. Наши приложения работают на вашем устройстве и не собирают, не хранят на серверах и не передают персональные или технические данные.',
      'privacy.nocollect.title': 'Какие данные мы не собираем',
      'privacy.nocollect.p': 'Наши приложения <strong>не</strong> собирают следующие данные:',
      'privacy.nocollect.l1': 'Персональные данные (имя, email, телефон и т. д.)',
      'privacy.nocollect.l2': 'Идентификаторы устройства или рекламные ID',
      'privacy.nocollect.l3': 'Данные о местоположении',
      'privacy.nocollect.l4': 'Аналитику использования или отчёты о сбоях',
      'privacy.nocollect.l5': 'Контакты, фото или другой контент с устройства',
      'privacy.nocollect.l6': 'Платёжные или финансовые данные',
      'privacy.local.title': 'Локальные данные на устройстве',
      'privacy.local.p1': 'Приложения могут хранить данные локально на устройстве для работы офлайн (например, настройки, записи или данные, которые вы создаёте в приложении).',
      'privacy.local.p2': 'Эти данные не покидают устройство, если вы сами не экспортируете или не поделитесь ими (например, экспорт файла или системный диалог «Поделиться»). У нас нет доступа к этой информации; она не отправляется на наши серверы или внешние сервисы автоматически.',
      'privacy.share.title': 'Передача данных',
      'privacy.share.p': 'Мы не передаём данные третьим лицам, потому что не собираем их. Приложения не используют аналитику, рекламные SDK или сервисы отслеживания.',
      'privacy.children.title': 'Дети',
      'privacy.children.p': 'Приложения сознательно не собирают информацию ни от кого, включая детей младше 13 лет. Поскольку данные не собираются и не передаются, приложения подходят для любого возраста.',
      'privacy.changes.title': 'Изменения политики',
      'privacy.changes.p': 'Мы можем обновлять эту политику время от времени. Изменения публикуются на этой странице с обновлённой датой.',
      'privacy.contact.title': 'Контакты',
      'privacy.contact.p': 'По вопросам обращайтесь:'
    }
  };

  function detectLocale() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) {
      return saved;
    }

    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en'];

    for (var i = 0; i < langs.length; i++) {
      var code = langs[i].toLowerCase().split('-')[0];
      if (SUPPORTED.indexOf(code) !== -1) {
        return code;
      }
    }

    return 'en';
  }

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
    if (SUPPORTED.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function initSwitcher() {
    var footerTop = document.querySelector('.footer-top');
    if (!footerTop || document.querySelector('.lang-switcher')) return;

    var privacyNav = footerTop.querySelector('nav');
    var nav = document.createElement('nav');
    nav.className = 'lang-switcher';
    nav.setAttribute('aria-label', t(lang, 'lang.label'));

    SUPPORTED.forEach(function (code) {
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

    if (privacyNav) {
      footerTop.insertBefore(nav, privacyNav);
    } else {
      footerTop.appendChild(nav);
    }
  }

  var lang = detectLocale();
  initSwitcher();
  applyLang(lang);

  window.SiteI18n = { setLang: setLang, t: function (key, vars) { return t(lang, key, vars); } };
})();
