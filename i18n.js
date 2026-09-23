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
      'index.meta': 'Urlaubsplaner und Wochenbericht — Android-Apps von Smolik Maksim',
      'index.subtitle': 'Nützliche Android-Apps für Arbeit und Freizeit',
      'index.urlaubsplaner.name': 'Urlaubsplaner',
      'index.urlaubsplaner.meta': 'Vacation Planner · Urlaubsplaner',
      'index.urlaubsplaner.desc': 'Urlaubsplanung fürs ganze Jahr: 9 Länder, Export, Widget, 9 Sprachen.',
      'index.wochenbericht.meta': 'Arbeitszeiterfassung · Zeiterfassung',
      'index.wochenbericht.desc': 'Arbeitszeiterfassung für Monteure und Elektriker mit PDF-Export.',

      'urlaubsplaner.title': 'Urlaubsplaner',
      'urlaubsplaner.heading': 'Urlaubsplaner',
      'urlaubsplaner.meta': 'Urlaubsplaner — einfache Urlaubsplanung fürs ganze Jahr',
      'urlaubsplaner.subtitle': 'Vacation Planner',
      'urlaubsplaner.intro': 'Eine übersichtliche App zur Urlaubsplanung fürs ganze Jahr. Behalte deinen Urlaubsanspruch im Blick, markiere freie Tage mit wenigen Fingertipps und nutze Feiertage sowie Schulferien für Deutschland, Österreich, Tschechien, die Schweiz, die Niederlande, Frankreich, Polen, Ungarn und Italien.',
      'urlaubsplaner.features.title': 'Hauptfunktionen',
      'urlaubsplaner.f.balance.title': 'Smarte Urlaubsberechnung',
      'urlaubsplaner.f.balance.text': 'Gib Jahresanspruch und Resturlaub aus dem Vorjahr ein. Die App berechnet das verbleibende Kontingent automatisch — inklusive halber Tage — und übernimmt Resttage oder ein Defizit ins nächste Jahr.',
      'urlaubsplaner.f.marking.title': 'Kinderleichte Bedienung',
      'urlaubsplaner.f.marking.tap': 'Kurzer Fingertipp: markiert oder entfernt sofort einen vollen Urlaubstag.',
      'urlaubsplaner.f.marking.long': 'Langer Druck: Kategorien wählen (Arbeit, Urlaub, halber Tag, Überstunden, Feiertag, frei oder eigene).',
      'urlaubsplaner.f.marking.half': 'Halbe Tage: diagonal dargestellt und ziehen exakt 0,5 Tage vom Urlaubskonto ab.',
      'urlaubsplaner.f.holidays.title': 'Feiertage & Schulferien',
      'urlaubsplaner.f.holidays.text': 'Deutschlands Feiertage werden offline nach Bundesland berechnet; für die anderen Länder kommen Feiertage und optionale Schulferien von der OpenHolidays API, lokal 30 Tage zwischengespeichert. Regionale deutsche Feiertage sind am Kontur erkennbar. Manuelle Aktualisierung nach 15 Tagen.',
      'urlaubsplaner.f.views.title': 'Flexible Kalenderansichten',
      'urlaubsplaner.f.views.text': 'Jahresübersicht (2×6-Gitter) oder durchgehendes Monatsband — per Doppeltipp auf freie Fläche einer Monatskarte wechseln.',
      'urlaubsplaner.f.export.title': 'Kalender exportieren',
      'urlaubsplaner.f.export.text': 'Teile das Jahr als Bild, PDF (Hoch- oder Querformat) oder ICS-Datei. Titel und sichtbare Kategorien für Bild/PDF anpassbar; versteckte Tage erscheinen wie Arbeitstage.',
      'urlaubsplaner.f.widget.title': 'Homescreen-Widget (Android)',
      'urlaubsplaner.f.widget.text': 'Countdown bis zum nächsten Urlaub — anpassbare Größe (1×1 bis 2×1), volle Transparenz und eigene wechselnde Sprüche (bis zu 24 pro Liste, Rotation ab Mitternacht).',
      'urlaubsplaner.f.colors.title': 'Individuelle Farben',
      'urlaubsplaner.f.colors.text': 'Farben und Transparenz für alle Kategorien per Palette oder HSV-Regler anpassen.',
      'urlaubsplaner.f.backup.title': 'Backup',
      'urlaubsplaner.f.backup.text': 'Einstellungen, Kategorien und markierte Tage als JSON speichern und wiederherstellen — optional auch Cloud-Backup über Android.',
      'urlaubsplaner.privacy.title': 'Privatsphäre & Sicherheit',
      'urlaubsplaner.privacy.l1': '100 % lokal: deine Daten bleiben auf dem Gerät — ohne Account oder App-Server.',
      'urlaubsplaner.privacy.l2': 'Minimale Internetnutzung: nur für Feiertage und Schulferien; keine persönlichen Daten werden übertragen.',
      'urlaubsplaner.privacy.l3': 'Hell- und Dunkelmodus; 9 Sprachen: CS, NL, EN, FR, DE, HU, IT, PL, RU.',
      'urlaubsplaner.screenshots': 'Screenshots',
      'urlaubsplaner.carousel': 'Screenshots',
      'urlaubsplaner.prev': 'Vorheriges Bild',
      'urlaubsplaner.next': 'Nächstes Bild',
      'urlaubsplaner.dots': 'Screenshot-Auswahl',
      'urlaubsplaner.shot': 'Urlaubsplaner — Screenshot {n}',

      'wochenbericht.title': 'Wochenbericht',
      'wochenbericht.meta': 'Wochenbericht — Arbeitszeiterfassung für Android',
      'wochenbericht.subtitle': 'Arbeitszeiterfassung · Zeiterfassung',
      'wochenbericht.desc': 'Arbeitszeiterfassung für Monteure und Elektriker: Stunden pro Tag, mehrere Baustellen am Tag, Überstundenberechnung, Verlauf und PDF-Export. JSON-Backup nur auf Wunsch.',

      'index.launcher_meetings.name': 'Launcher Meetings',
      'index.launcher_meetings.meta': 'Zoom-Shortcuts · Schnellstart',
      'index.launcher_meetings.desc': 'Beschreibung folgt in Kürze.',

      'launcher_meetings.title': 'Launcher Meetings',
      'launcher_meetings.heading': 'Launcher Meetings',
      'launcher_meetings.meta': 'Launcher Meetings — Android-App für Zoom-Konferenzen',
      'launcher_meetings.subtitle': 'de.smcode.lm',
      'launcher_meetings.desc': 'Beschreibung folgt in Kürze. Die App speichert Ihre Meeting-Verknüpfungen lokal und startet Zoom auf dem Gerät.',

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
      'privacy.contact.p': 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns unter:',

      'privacy.urlaubsplaner.meta': 'Datenschutz — Urlaubsplaner (de.smcode.vacationplaner)',
      'privacy.urlaubsplaner.back': '← Urlaubsplaner',
      'privacy.urlaubsplaner.intro.p1': 'Diese Datenschutzerklärung gilt für die Android-App Urlaubsplaner (Package: de.smcode.vacationplaner), entwickelt von smcode („wir“, „uns“).',
      'privacy.urlaubsplaner.local.p1': 'Urlaubsplaner speichert markierte Tage, Kategorien, Einstellungen und zwischengespeicherte Feiertagsdaten nur lokal auf Ihrem Gerät (Hive). Es gibt kein Benutzerkonto und keinen App-Server von smcode.',
      'privacy.urlaubsplaner.local.p2': 'Backup, Kalender-Export (JSON, Bild, PDF, ICS) und Teilen erfolgen nur, wenn Sie dies in der App auslösen — über die System-Dateiauswahl oder den Teilen-Dialog.',
      'privacy.urlaubsplaner.network.title': 'Internetverbindung',
      'privacy.urlaubsplaner.network.p': 'Die App nutzt das Internet ausschließlich, um Feiertags- und Schulferiendaten von der OpenHolidays API zu laden. Dabei werden keine personenbezogenen Daten gesendet; Anfragen enthalten nur Land, Region und Zeitraum. Optional kann Android-Cloud-Backup in den Einstellungen aktiviert werden — die App lädt selbst nichts hoch.',

      'privacy.wochenbericht.meta': 'Datenschutz — Wochenbericht (de.smcode.wochenbericht)',
      'privacy.wochenbericht.back': '← Wochenbericht',
      'privacy.wochenbericht.intro.p1': 'Diese Datenschutzerklärung gilt für die Android-App Wochenbericht (Package: de.smcode.wochenbericht), entwickelt von smcode („wir“, „uns“).',
      'privacy.wochenbericht.local.p1': 'Wochenbericht speichert Arbeitszeiteinträge, Baustellen, Einstellungen und gespeicherte Wochenberichte nur lokal auf Ihrem Gerät (SQLite). Es gibt kein Benutzerkonto und keinen App-Server von smcode.',
      'privacy.wochenbericht.local.p2': 'PDF-Export, JSON-Datensicherung und Teilen erfolgen nur auf Ihre Anweisung. Die App benötigt dafür keine dauerhafte Internetverbindung und sendet keine Daten an smcode.',

      'privacy.launcher_meetings.meta': 'Datenschutz — Launcher Meetings (de.smcode.lm)',
      'privacy.launcher_meetings.back': '← Launcher Meetings',
      'privacy.launcher_meetings.intro.p1': 'Diese Datenschutzerklärung gilt für die Android-App Launcher Meetings (Package: de.smcode.lm), entwickelt von smcode („wir“, „uns“).',
      'privacy.launcher_meetings.local.p1': 'Launcher Meetings speichert Meeting-Verknüpfungen, Anzeigenamen und Spracheinstellungen nur lokal auf Ihrem Gerät (SharedPreferences). Es gibt kein Benutzerkonto und keinen App-Server von smcode.',
      'privacy.launcher_meetings.local.p2': 'Zum Beitreten zu Meetings öffnet die App Zoom auf dem Gerät. smcode ist nicht mit Zoom Video Communications verbunden. Android-Backup ist in der App deaktiviert.'
    },

    en: {
      'lang.label': 'Language',
      'nav.home': 'Home',
      'nav.apps': '← All apps',
      'nav.privacy': 'Privacy Policy',
      'btn.more': 'Learn more',
      'btn.play': 'Google Play',

      'index.title': 'My apps',
      'index.meta': 'Urlaubsplaner and Wochenbericht — Android apps by Smolik Maksim',
      'index.subtitle': 'Useful Android apps for work and leisure',
      'index.urlaubsplaner.name': 'Vacation Planner',
      'index.urlaubsplaner.meta': 'Vacation Planner · Urlaubsplaner',
      'index.urlaubsplaner.desc': 'Plan vacation across the year: 9 countries, export, widget, 9 languages.',
      'index.wochenbericht.meta': 'Arbeitszeiterfassung · Time tracking',
      'index.wochenbericht.desc': 'Work time tracking for technicians and electricians with PDF export.',

      'urlaubsplaner.title': 'Vacation Planner',
      'urlaubsplaner.heading': 'Vacation Planner',
      'urlaubsplaner.meta': 'Vacation Planner (Urlaubsplaner) — plan your time off across the year',
      'urlaubsplaner.subtitle': 'Urlaubsplaner',
      'urlaubsplaner.intro': 'A clean app for planning vacation across the full year. Track your balance, mark days off with a few taps, and use public and school holidays for Germany, Austria, Czechia, Switzerland, the Netherlands, France, Poland, Hungary, and Italy.',
      'urlaubsplaner.features.title': 'Key Features',
      'urlaubsplaner.f.balance.title': 'Smart Balance Tracking',
      'urlaubsplaner.f.balance.text': 'Set your annual entitlement and leftover days from last year. The app calculates your remaining balance automatically — including half days — and carries unused days or a deficit into the next year.',
      'urlaubsplaner.f.marking.title': 'Effortless Day Marking',
      'urlaubsplaner.f.marking.tap': 'Short tap: instantly marks or clears a full vacation day.',
      'urlaubsplaner.f.marking.long': 'Long press: pick a category (work, vacation, half day, overtime, public holiday, day off, or custom).',
      'urlaubsplaner.f.marking.half': 'Half days: shown with a diagonal split and deduct exactly 0.5 days from your balance.',
      'urlaubsplaner.f.holidays.title': 'Public & School Holidays',
      'urlaubsplaner.f.holidays.text': 'German public holidays are calculated offline by state; for other countries, public and optional school holidays come from the OpenHolidays API and are cached locally for 30 days. Regional German holidays appear with an outline. Manual refresh after 15 days.',
      'urlaubsplaner.f.views.title': 'Versatile Views',
      'urlaubsplaner.f.views.text': 'Full year grid (2×6) or a vertical month tape — double-tap empty space on a month card to switch.',
      'urlaubsplaner.f.export.title': 'Calendar Export',
      'urlaubsplaner.f.export.text': 'Share the year as an image, PDF (portrait or landscape), or ICS file. Edit the title and choose visible categories for image/PDF; hidden days look like work days.',
      'urlaubsplaner.f.widget.title': 'Home-Screen Widget (Android)',
      'urlaubsplaner.f.widget.text': 'Countdown to your next vacation — resizable (1×1 to 2×1), fully transparent, with custom rotating phrases (up to 24 per list, rotation from midnight).',
      'urlaubsplaner.f.colors.title': 'Color Customization',
      'urlaubsplaner.f.colors.text': 'Adjust category colors and transparency with a palette or HSV sliders.',
      'urlaubsplaner.f.backup.title': 'Backup',
      'urlaubsplaner.f.backup.text': 'Save and restore settings, categories, and marked days as JSON — optional Android cloud backup included.',
      'urlaubsplaner.privacy.title': 'Privacy & Simplicity',
      'urlaubsplaner.privacy.l1': 'No accounts, no app server: your data stays on your device.',
      'urlaubsplaner.privacy.l2': 'Minimal internet use: only for holidays and school breaks; no personal data is sent.',
      'urlaubsplaner.privacy.l3': 'Light and dark themes; 9 languages: CS, NL, EN, FR, DE, HU, IT, PL, RU.',
      'urlaubsplaner.screenshots': 'Screenshots',
      'urlaubsplaner.carousel': 'Screenshots',
      'urlaubsplaner.prev': 'Previous image',
      'urlaubsplaner.next': 'Next image',
      'urlaubsplaner.dots': 'Screenshot selection',
      'urlaubsplaner.shot': 'Urlaubsplaner — screenshot {n}',

      'wochenbericht.title': 'Wochenbericht',
      'wochenbericht.meta': 'Wochenbericht — work time tracking for Android',
      'wochenbericht.subtitle': 'Arbeitszeiterfassung · Time tracking',
      'wochenbericht.desc': 'Work time tracking for technicians and electricians: hours per day, multiple job sites per day, overtime calculation, history, and PDF export. JSON backup only when you choose.',

      'index.launcher_meetings.name': 'Launcher Meetings',
      'index.launcher_meetings.meta': 'Zoom shortcuts · Quick join',
      'index.launcher_meetings.desc': 'Description coming soon.',

      'launcher_meetings.title': 'Launcher Meetings',
      'launcher_meetings.heading': 'Launcher Meetings',
      'launcher_meetings.meta': 'Launcher Meetings — Android app for Zoom conferences',
      'launcher_meetings.subtitle': 'de.smcode.lm',
      'launcher_meetings.desc': 'Description coming soon. The app stores your meeting shortcuts locally and opens Zoom on your device.',

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
      'privacy.contact.p': 'If you have any questions about this Privacy Policy, please contact us at:',

      'privacy.urlaubsplaner.meta': 'Privacy Policy — Urlaubsplaner (de.smcode.vacationplaner)',
      'privacy.urlaubsplaner.back': '← Urlaubsplaner',
      'privacy.urlaubsplaner.intro.p1': 'This Privacy Policy applies to the Android app Urlaubsplaner (package: de.smcode.vacationplaner), developed by smcode ("we", "us").',
      'privacy.urlaubsplaner.local.p1': 'Urlaubsplaner stores marked days, categories, settings, and cached holiday data locally on your device only (Hive). There is no user account and no smcode app server.',
      'privacy.urlaubsplaner.local.p2': 'Backup, calendar export (JSON, image, PDF, ICS), and sharing happen only when you trigger them in the app — via the system file picker or share dialog.',
      'privacy.urlaubsplaner.network.title': 'Internet Access',
      'privacy.urlaubsplaner.network.p': 'The app uses the internet only to load public and school holiday data from the OpenHolidays API. No personal data is sent; requests contain only country, region, and date range. Optional Android cloud backup can be enabled in settings — the app does not upload data itself.',

      'privacy.wochenbericht.meta': 'Privacy Policy — Wochenbericht (de.smcode.wochenbericht)',
      'privacy.wochenbericht.back': '← Wochenbericht',
      'privacy.wochenbericht.intro.p1': 'This Privacy Policy applies to the Android app Wochenbericht (package: de.smcode.wochenbericht), developed by smcode ("we", "us").',
      'privacy.wochenbericht.local.p1': 'Wochenbericht stores work time entries, job sites, settings, and saved weekly reports locally on your device only (SQLite). There is no user account and no smcode app server.',
      'privacy.wochenbericht.local.p2': 'PDF export, JSON backup, and sharing happen only when you choose. The app does not require a persistent internet connection and does not send data to smcode.',

      'privacy.launcher_meetings.meta': 'Privacy Policy — Launcher Meetings (de.smcode.lm)',
      'privacy.launcher_meetings.back': '← Launcher Meetings',
      'privacy.launcher_meetings.intro.p1': 'This Privacy Policy applies to the Android app Launcher Meetings (package: de.smcode.lm), developed by smcode ("we", "us").',
      'privacy.launcher_meetings.local.p1': 'Launcher Meetings stores meeting shortcuts, display names, and language settings locally on your device only (SharedPreferences). There is no user account and no smcode app server.',
      'privacy.launcher_meetings.local.p2': 'To join meetings, the app opens Zoom on your device. smcode is not affiliated with Zoom Video Communications. Android backup is disabled in the app.'
    },

    ru: {
      'lang.label': 'Язык',
      'nav.home': 'Главная',
      'nav.apps': '← Все приложения',
      'nav.privacy': 'Privacy Policy',
      'btn.more': 'Подробнее',
      'btn.play': 'Google Play',

      'index.title': 'Мои приложения',
      'index.meta': 'Urlaubsplaner и Wochenbericht — Android-приложения от Smolik Maksim',
      'index.subtitle': 'Полезные Android-приложения для работы и отдыха',
      'index.urlaubsplaner.name': 'Планировщик отпуска',
      'index.urlaubsplaner.meta': 'Vacation Planner · Планировщик отпуска',
      'index.urlaubsplaner.desc': 'Планирование отпуска на год: 9 стран, экспорт, виджет, 9 языков.',
      'index.wochenbericht.meta': 'Arbeitszeiterfassung · Учёт рабочего времени',
      'index.wochenbericht.desc': 'Учёт рабочего времени для монтажников и электриков с PDF-экспортом.',

      'urlaubsplaner.title': 'Планировщик отпуска',
      'urlaubsplaner.heading': 'Планировщик отпуска',
      'urlaubsplaner.meta': 'Планировщик отпуска (Urlaubsplaner) — Android-приложение',
      'urlaubsplaner.subtitle': 'Urlaubsplaner',
      'urlaubsplaner.intro': 'Удобное приложение для наглядного планирования отпуска на весь год. Следит за балансом, позволяет быстро отмечать дни и учитывает государственные и школьные каникулы для Германии, Австрии, Чехии, Швейцарии, Нидерландов, Франции, Польши, Венгрии и Италии.',
      'urlaubsplaner.features.title': 'Основные возможности',
      'urlaubsplaner.f.balance.title': 'Умный расчёт дней отпуска',
      'urlaubsplaner.f.balance.text': 'Укажите положенные дни и остаток с прошлого года. Приложение само посчитает баланс — с учётом половинчатых дней — и перенесёт неиспользованные дни или дефицит на следующий год.',
      'urlaubsplaner.f.marking.title': 'Простая отметка дней',
      'urlaubsplaner.f.marking.tap': 'Обычный тап: моментально отмечает или снимает полный день отпуска.',
      'urlaubsplaner.f.marking.long': 'Долгое нажатие: выбор категории (работа, отпуск, половинчатый день, переработка, праздник, выходной или своя).',
      'urlaubsplaner.f.marking.half': 'Половинки дней: диагональная заливка и списание ровно 0,5 дня из баланса.',
      'urlaubsplaner.f.holidays.title': 'Праздники и каникулы',
      'urlaubsplaner.f.holidays.text': 'Праздники Германии считаются офлайн по федеральным землям; для остальных стран праздники и опциональные школьные каникулы загружаются через OpenHolidays API и кэшируются на 30 дней. Региональные праздники в Германии выделены контуром. Ручное обновление через 15 дней.',
      'urlaubsplaner.f.views.title': 'Удобные режимы просмотра',
      'urlaubsplaner.f.views.text': 'Сетка на весь год (2×6) или вертикальная лента месяцев — двойной тап по пустой области месяца переключает вид.',
      'urlaubsplaner.f.export.title': 'Экспорт календаря',
      'urlaubsplaner.f.export.text': 'Поделиться годом как картинкой, PDF (книжный или альбомный формат) или ICS-файлом. Название и видимые категории настраиваются; скрытые дни выглядят как рабочие.',
      'urlaubsplaner.f.widget.title': 'Виджет для главного экрана (Android)',
      'urlaubsplaner.f.widget.text': 'Обратный отсчёт до ближайшего отпуска — настраиваемый размер (1×1–2×1), полная прозрачность и свои фразы (до 24 в списке, смена от полуночи).',
      'urlaubsplaner.f.colors.title': 'Гибкая настройка цветов',
      'urlaubsplaner.f.colors.text': 'Цвета и прозрачность категорий через палитру или HSV-регуляторы.',
      'urlaubsplaner.f.backup.title': 'Резервное копирование',
      'urlaubsplaner.f.backup.text': 'Сохранение и восстановление настроек, категорий и отмеченных дней в JSON — опционально облачный бэкап Android.',
      'urlaubsplaner.privacy.title': 'Приватность и безопасность',
      'urlaubsplaner.privacy.l1': 'Без аккаунтов и серверов: все данные только на вашем устройстве.',
      'urlaubsplaner.privacy.l2': 'Минимум интернета: только для праздников и каникул; личные данные никуда не отправляются.',
      'urlaubsplaner.privacy.l3': 'Светлая и тёмная тема; 9 языков: CS, NL, EN, FR, DE, HU, IT, PL, RU.',
      'urlaubsplaner.screenshots': 'Скриншоты',
      'urlaubsplaner.carousel': 'Скриншоты',
      'urlaubsplaner.prev': 'Предыдущий скриншот',
      'urlaubsplaner.next': 'Следующий скриншот',
      'urlaubsplaner.dots': 'Выбор скриншота',
      'urlaubsplaner.shot': 'Urlaubsplaner — скриншот {n}',

      'wochenbericht.title': 'Wochenbericht',
      'wochenbericht.meta': 'Wochenbericht — учёт рабочего времени для Android',
      'wochenbericht.subtitle': 'Arbeitszeiterfassung · Учёт рабочего времени',
      'wochenbericht.desc': 'Учёт рабочего времени для монтажников и электриков: ввод часов по дням, несколько объектов в день, расчёт переработок, история и PDF-экспорт. Резервное копирование в JSON — только по вашему выбору.',

      'index.launcher_meetings.name': 'Launcher Meetings',
      'index.launcher_meetings.meta': 'Ярлыки Zoom · Быстрый вход',
      'index.launcher_meetings.desc': 'Описание скоро будет добавлено.',

      'launcher_meetings.title': 'Launcher Meetings',
      'launcher_meetings.heading': 'Launcher Meetings',
      'launcher_meetings.meta': 'Launcher Meetings — Android-приложение для Zoom-конференций',
      'launcher_meetings.subtitle': 'de.smcode.lm',
      'launcher_meetings.desc': 'Описание скоро будет добавлено. Приложение хранит ярлыки встреч локально и открывает Zoom на устройстве.',

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
      'privacy.contact.p': 'По вопросам обращайтесь:',

      'privacy.urlaubsplaner.meta': 'Privacy Policy — Urlaubsplaner (de.smcode.vacationplaner)',
      'privacy.urlaubsplaner.back': '← Urlaubsplaner',
      'privacy.urlaubsplaner.intro.p1': 'Эта политика конфиденциальности относится к приложению Urlaubsplaner для Android (package: de.smcode.vacationplaner), разработанному smcode («мы»).',
      'privacy.urlaubsplaner.local.p1': 'Urlaubsplaner хранит отмеченные дни, категории, настройки и кэш праздников только локально на устройстве (Hive). Нет аккаунта и серверов smcode.',
      'privacy.urlaubsplaner.local.p2': 'Резервное копирование, экспорт календаря (JSON, изображение, PDF, ICS) и «Поделиться» — только по вашему действию через системный выбор файла или диалог sharing.',
      'privacy.urlaubsplaner.network.title': 'Доступ в интернет',
      'privacy.urlaubsplaner.network.p': 'Интернет используется только для загрузки государственных и школьных праздников через OpenHolidays API. Персональные данные не отправляются; в запросах только страна, регион и период. Опционально можно включить облачный бэкап Android — приложение само ничего не загружает.',

      'privacy.wochenbericht.meta': 'Privacy Policy — Wochenbericht (de.smcode.wochenbericht)',
      'privacy.wochenbericht.back': '← Wochenbericht',
      'privacy.wochenbericht.intro.p1': 'Эта политика конфиденциальности относится к приложению Wochenbericht для Android (package: de.smcode.wochenbericht), разработанному smcode («мы»).',
      'privacy.wochenbericht.local.p1': 'Wochenbericht хранит записи рабочего времени, объекты, настройки и сохранённые отчёты только локально на устройстве (SQLite). Нет аккаунта и серверов smcode.',
      'privacy.wochenbericht.local.p2': 'PDF-экспорт, JSON-бэкап и «Поделиться» — только по вашему выбору. Постоянное подключение к интернету не требуется; данные не отправляются smcode.',

      'privacy.launcher_meetings.meta': 'Privacy Policy — Launcher Meetings (de.smcode.lm)',
      'privacy.launcher_meetings.back': '← Launcher Meetings',
      'privacy.launcher_meetings.intro.p1': 'Эта политика конфиденциальности относится к приложению Launcher Meetings для Android (package: de.smcode.lm), разработанному smcode («мы»).',
      'privacy.launcher_meetings.local.p1': 'Launcher Meetings хранит ярлыки встреч, отображаемые имена и настройки языка только локально на устройстве (SharedPreferences). Нет аккаунта и серверов smcode.',
      'privacy.launcher_meetings.local.p2': 'Для входа в конференцию приложение открывает Zoom на устройстве. smcode не связан с Zoom Video Communications. Резервное копирование Android в приложении отключено.'
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
