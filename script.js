/* =========================================================
   KHC – Kind House Catania Apartment
   ========================================================= */
(() => {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------------------------------------------------------
     GALLERIA – modifica qui l'elenco delle foto.
     1) Metti le immagini nella cartella "img/"
     2) Aggiorna src e descrizione. Per aggiungere una foto
        basta aggiungere una riga. Se un file non esiste viene
        mostrato un segnaposto.
     --------------------------------------------------------- */
  const PHOTOS = [

    { src: 'ingressocasa.jpeg', alt: 'Ingresso' },
    { src: 'ingressocasa2.jpeg', alt: 'Ingresso' },
    { src: 'ingressocasa3.jpeg', alt: 'Ingresso' },

    { src: 'giardino.jpeg', alt: 'Giardino' }, 

    { src: 'salone.jpeg', alt: 'Salone' },
    { src: 'salone2.jpeg', alt: 'Salone' },
    { src: 'salone3.jpeg', alt: 'Salone' },
    { src: 'salone4.jpeg', alt: 'Salone' },
    { src: 'salone5.jpeg', alt: 'Salone' },

    { src: 'cucina.jpeg', alt: 'Cucina' },
    { src: 'cucina2.jpeg', alt: 'Cucina' },
    { src: 'cucina3.jpeg', alt: 'Cucina' },
    { src: 'cucina4.jpeg', alt: 'Cucina' },

    { src: 'cameradaletto.jpeg', alt: 'Camera da letto' },
    { src: 'cameradaletto2.jpeg', alt: 'Camera da letto' },
    { src: 'cameradaletto3.jpeg', alt: 'Camera da letto' },
    { src: 'cameradaletto4.jpeg', alt: 'Camera da letto' },
    { src: 'cameradaletto5.jpeg', alt: 'Camera da letto' },

    { src: 'bagno.jpeg', alt: 'Bagno' },
    { src: 'bagno2.jpeg', alt: 'Bagno' },
    { src: 'bagno3.jpeg', alt: 'Bagno' },
    { src: 'bagno4.jpeg', alt: 'Bagno' },

    { src: 'box1.jpeg', alt: 'Parcheggio Custodito' },
    { src: 'box2.jpeg', alt: 'Parcheggio Custodito' },
    { src: 'box3.jpeg', alt: 'Parcheggio Custodito' },
    
    

    

    

    

    


    

  ];

  /* ---------------------------------------------------------
     LINGUE – testi del sito in italiano (it) e inglese (en).
     Per cambiare un testo modifica il valore della chiave
     corrispondente. I nomi delle foto della galleria sono in
     "photos": se aggiungi una nuova descrizione in PHOTOS,
     aggiungi qui anche la sua traduzione.
     --------------------------------------------------------- */
  const I18N = {
    it: {
      'skip': "Vai al contenuto",
      'aria.top': "KHC – torna in alto",
      'aria.mainNav': "Navigazione principale",
      'nav.casa': "La casa",
      'nav.gallery': "Galleria",
      'nav.services': "Servizi",
      'nav.contacts': "Contatti",
      'nav.book': "Prenota",
      'aria.lang': "Lingua",
      'hero.logoAlt': "Logo KHC: vulcano con nuvola di fumo",
      'hero.tagline': "Benvenuti nel cuore pulsante di Catania",
      'hero.book': "Prenota ora",
      'hero.gallery': "Guarda la galleria",
      'aria.scroll': "Scorri verso il basso",
      'about.eyebrow': "La casa",
      'gallery.eyebrow': "Galleria",
      'services.eyebrow': "Servizi",
      'contacts.eyebrow': "Contatti",
      'about.title': "Un rifugio contemporaneo<br>nel cuore della città",
      'about.lead': "Questa elegante casa vacanza, arredata in stile moderno minimal, vi accoglie con ambienti luminosi, linee pulite e un design essenziale che trasmette immediatamente sensazione di ordine, relax e benessere.",
      'about.p2': "Ogni dettaglio è pensato per unire estetica e funzionalità, creando uno spazio raffinato ma allo stesso tempo caldo e accogliente.",
      'about.p3': "La posizione centrale è il punto di forza: potrete esplorare Catania a piedi, tra vicoli storici, locali tipici e scorci suggestivi, vivendo la città in modo autentico e senza stress.",
      'f1.t': "Ambienti luminosi",
      'f2.t': "Posizione centrale",
      'f3.t': "Parcheggio custodito",
      'f4.t': "Calda accoglienza",
      'f1.p': "Spazi aperti e curati, pensati per il vostro relax.",
      'f2.p': "Catania a portata di passo, tra vicoli storici e locali tipici.",
      'f3.p': "Offriamo un parcheggio custodito gratuito: lasciate l'auto in tutta tranquillità.",
      'f4.p': "Raffinata ma accogliente, per un soggiorno indimenticabile.",
      'gallery.title': "Gli spazi di KHC",
      'gallery.hint': "Tocca una foto per ingrandirla e scorri per vedere le altre.",
      'aria.gallery': "Galleria fotografica",
      'services.title': "Il tuo soggiorno,<br>senza pensieri",
      'services.intro': "Possibilità di usufruire dei nostri servizi a prezzi agevolati.",
      's1.t': "Servizio navetta",
      's1.p': "Arrivate e ripartite senza pensieri: il transfer vi accompagna dall'aeroporto direttamente a casa e, a fine soggiorno, vi riporta in aeroporto.",
      's2.t': "Noleggio auto",
      's2.p': "Volete la massima libertà? Potete noleggiare un'auto per spostarvi a vostro ritmo tra Catania, la costa e i borghi dell'isola.",
      's3.t': "Escursioni",
      's3.p': "Scoprite la Sicilia con noi: gite in barca lungo la costa, escursioni sull'Etna e itinerari in tutta l'isola, tra mare, natura e tradizioni.",
      'services.cta': "Per maggiori informazioni e disponibilità contattaci: saremo felici di organizzare tutto per te.",
      'services.contact': "Contattaci",
      'services.whatsapp': "Scrivici su WhatsApp",
      'book.title': "Prenota ora il tuo soggiorno<br>nel cuore della Sicilia!",
      'book.note': "Oppure scrivici direttamente su WhatsApp per info e disponibilità.",
      'book.airbnb': "Prenota su Airbnb",
      'book.booking': "Prenota su Booking",
      'contacts.title': "Mettiti in contatto",
      'c.phone': "Telefono",
      'c.location': "Posizione",
      'c.maps': "Apri su Google Maps",
      'c.follow': "Seguici",
      'c.message': "Scrivici un messaggio",
      'c.page': "Visita la pagina",
      'c.videos': "Guarda i video",
      'c.book': "Prenota",
      'footer.tag': "Kind House Catania Apartment · Catania, Sicilia",
      'footer.cookies': "Gestisci cookie",
      'footer.rights': "Tutti i diritti riservati.",
      'lb.dialog': "Galleria ingrandita",
      'lb.close': "Chiudi",
      'lb.prev': "Foto precedente",
      'lb.next': "Foto successiva",
      'cookie.title': "Utilizziamo i cookie",
      'cookie.text': "Usiamo cookie tecnici necessari al funzionamento del sito e, con il tuo consenso, cookie di terze parti per statistiche e contenuti esterni. Puoi accettare, rifiutare o scegliere le tue preferenze. Per saperne di più leggi la nostra <a href=\"#\">Cookie Policy</a>.",
      'cookie.necT': "Necessari",
      'cookie.necD': "Indispensabili per il funzionamento del sito. Sempre attivi.",
      'cookie.anT': "Statistici",
      'cookie.anD': "Ci aiutano a capire come viene usato il sito, in forma aggregata.",
      'cookie.mkT': "Marketing e contenuti di terze parti",
      'cookie.mkD': "Mappe, social e servizi esterni che possono impostare propri cookie.",
      'cookie.reject': "Rifiuta",
      'cookie.custom': "Personalizza",
      'cookie.save': "Salva scelte",
      'cookie.accept': "Accetta tutti",
      'meta.title': "KHC – Kind House Catania Apartment | Casa vacanza nel centro di Catania",
      'meta.desc': "Kind House Catania Apartment (KHC): elegante casa vacanza in stile moderno minimal nel cuore di Catania. Scopri la galleria e prenota il tuo soggiorno.",
      'meta.ogTitle': "KHC – Kind House Catania Apartment",
      'meta.ogDesc': "Casa vacanza elegante nel cuore pulsante di Catania. Prenota il tuo soggiorno in Sicilia.",
      'aria.openMenu': "Apri il menu",
      'aria.closeMenu': "Chiudi il menu",
      'zoom': "Ingrandisci",
      'ph': "Foto",
      photos: { "Ingresso": "Ingresso", "Giardino": "Giardino", "Salone": "Salone", "Cucina": "Cucina", "Camera da letto": "Camera da letto", "Bagno": "Bagno", "Parcheggio Custodito": "Parcheggio Custodito" }
    },
    en: {
      'skip': "Skip to content",
      'aria.top': "KHC – back to top",
      'aria.mainNav': "Main navigation",
      'aria.lang': "Language",
      'aria.scroll': "Scroll down",
      'aria.gallery': "Photo gallery",
      'nav.casa': "The house",
      'nav.gallery': "Gallery",
      'nav.services': "Services",
      'nav.contacts': "Contact",
      'nav.book': "Book",
      'hero.logoAlt': "KHC logo: volcano with a plume of smoke",
      'hero.tagline': "Welcome to the beating heart of Catania",
      'hero.book': "Book now",
      'hero.gallery': "View the gallery",
      'about.eyebrow': "The house",
      'about.title': "A contemporary retreat<br>in the heart of the city",
      'about.lead': "This elegant holiday home, furnished in a modern minimal style, welcomes you with bright rooms, clean lines and an essential design that instantly conveys a sense of order, relaxation and well-being.",
      'about.p2': "Every detail is designed to combine aesthetics and function, creating a refined yet warm and welcoming space.",
      'about.p3': "The central location is its greatest strength: you can explore Catania on foot, among historic alleyways, traditional eateries and charming corners, experiencing the city authentically and stress-free.",
      'f1.t': "Bright rooms",
      'f1.p': "Open, well-kept spaces designed for your relaxation.",
      'f2.t': "Central location",
      'f2.p': "Catania within walking distance, among historic alleyways and traditional eateries.",
      'f3.t': "Secure parking",
      'f3.p': "We offer free secure parking, so you can leave your car with complete peace of mind.",
      'f4.t': "Warm welcome",
      'f4.p': "Refined yet welcoming, for an unforgettable stay.",
      'gallery.eyebrow': "Gallery",
      'gallery.title': "The spaces of KHC",
      'gallery.hint': "Tap a photo to enlarge it and swipe to see the others.",
      'services.eyebrow': "Services",
      'services.title': "Your stay,<br>worry-free",
      'services.intro': "You can take advantage of our services at discounted rates.",
      's1.t': "Shuttle service",
      's1.p': "Arrive and leave without a worry: the transfer takes you from the airport straight to the house and, at the end of your stay, back to the airport.",
      's2.t': "Car rental",
      's2.p': "Want total freedom? You can rent a car to travel at your own pace between Catania, the coast and the island's villages.",
      's3.t': "Excursions",
      's3.p': "Discover Sicily with us: boat trips along the coast, excursions on Mount Etna and itineraries across the whole island, between sea, nature and traditions.",
      'services.cta': "For more information and availability, get in touch: we'll be happy to organise everything for you.",
      'services.contact': "Contact us",
      'services.whatsapp': "Message us on WhatsApp",
      'book.title': "Book your stay now<br>in the heart of Sicily!",
      'book.airbnb': "Book on Airbnb",
      'book.booking': "Book on Booking",
      'book.note': "Or message us directly on WhatsApp for info and availability.",
      'contacts.eyebrow': "Contact",
      'contacts.title': "Get in touch",
      'c.phone': "Phone",
      'c.location': "Location",
      'c.maps': "Open in Google Maps",
      'c.follow': "Follow us",
      'c.message': "Send us a message",
      'c.page': "Visit our page",
      'c.videos': "Watch our videos",
      'c.book': "Book",
      'footer.tag': "Kind House Catania Apartment · Catania, Sicily",
      'footer.cookies': "Manage cookies",
      'footer.rights': "All rights reserved.",
      'lb.dialog': "Enlarged gallery",
      'lb.close': "Close",
      'lb.prev': "Previous photo",
      'lb.next': "Next photo",
      'cookie.title': "We use cookies",
      'cookie.text': "We use technical cookies necessary for the site to work and, with your consent, third-party cookies for statistics and external content. You can accept, reject or choose your preferences. To learn more, read our <a href=\"#\">Cookie Policy</a>.",
      'cookie.necT': "Necessary",
      'cookie.necD': "Essential for the site to work. Always active.",
      'cookie.anT': "Statistics",
      'cookie.anD': "Help us understand how the site is used, in aggregate form.",
      'cookie.mkT': "Marketing and third-party content",
      'cookie.mkD': "Maps, social networks and external services that may set their own cookies.",
      'cookie.reject': "Reject",
      'cookie.custom': "Customize",
      'cookie.save': "Save choices",
      'cookie.accept': "Accept all",
      'meta.title': "KHC – Kind House Catania Apartment | Holiday home in the heart of Catania",
      'meta.desc': "Kind House Catania Apartment (KHC): an elegant holiday home in a modern minimal style in the heart of Catania. Browse the gallery and book your stay.",
      'meta.ogTitle': "KHC – Kind House Catania Apartment",
      'meta.ogDesc': "An elegant holiday home in the beating heart of Catania. Book your stay in Sicily.",
      'aria.openMenu': "Open the menu",
      'aria.closeMenu': "Close the menu",
      'zoom': "Enlarge",
      'ph': "Photo",
      photos: { "Ingresso": "Entrance", "Giardino": "Garden", "Salone": "Living room", "Cucina": "Kitchen", "Camera da letto": "Bedroom", "Bagno": "Bathroom", "Parcheggio Custodito": "Secure parking" }
    }
  };

  const DEFAULT_LANG = 'it';
  const LANG_KEY = 'khc_lang';
  let lang = DEFAULT_LANG;
  const t = (key) => I18N[lang][key];
  const photoAlt = (p) => I18N[lang].photos[p.alt] || p.alt;

  const $ = (sel, root = document) => root.querySelector(sel);

  /* ---------- Segnaposto per foto mancanti ---------- */
  const placeholder = (n) => {
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="#2a241a"/><stop offset="1" stop-color="#14120f"/></linearGradient></defs>` +
      `<rect width="800" height="600" fill="url(#g)"/>` +
      `<g fill="none" stroke="#b58a35" stroke-opacity=".55" stroke-width="3">` +
      `<rect x="300" y="200" width="200" height="150" rx="14"/><circle cx="400" cy="275" r="40"/></g>` +
      `<text x="400" y="425" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="#b58a35" fill-opacity=".85">${t('ph')} ${n}</text>` +
      `</svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };

  const withFallback = (img, photo, index) => {
    img.addEventListener('error', () => {
      img.onerror = null;
      photo.failed = true;
      img.src = placeholder(index + 1);
    }, { once: true });
  };

  /* ---------- Anno nel footer ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: sfondo allo scroll + menu mobile ---------- */
  const header = $('.site-header');
  const nav = $('#main-nav');
  const toggle = $('#nav-toggle');

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? t('aria.closeMenu') : t('aria.openMenu'));
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 821px)').addEventListener('change', () => setMenu(false));

  /* ---------- Costruzione della galleria ---------- */
  const gallery = $('#gallery');
  const zoomIcon =
    '<span class="g-zoom" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="m20 20-4-4M11 8v6M8 11h6"/></svg></span>';

  PHOTOS.forEach((photo, i) => {
    const li = document.createElement('button');
    li.type = 'button';
    li.className = 'g-item reveal';
    li.setAttribute('aria-label', `${t('zoom')}: ${photoAlt(photo)}`);

    const img = new Image();
    img.src = photo.src;
    img.alt = photoAlt(photo);
    img.loading = i < 4 ? 'eager' : 'lazy';
    img.decoding = 'async';
    withFallback(img, photo, i);

    li.appendChild(img);
    li.insertAdjacentHTML('beforeend', zoomIcon);
    li.addEventListener('click', () => openLightbox(i, li));
    gallery.appendChild(li);
  });

  /* ---------- Lightbox ---------- */
  const lb = $('#lightbox');
  const lbImg = $('#lb-img');
  const lbCaption = $('#lb-caption');
  const lbCount = $('#lb-count');
  const lbClose = $('#lb-close');
  const lbPrev = $('#lb-prev');
  const lbNext = $('#lb-next');
  let current = 0;
  let opener = null;

  const showPhoto = (i) => {
    current = (i + PHOTOS.length) % PHOTOS.length;
    const p = PHOTOS[current];
    lbImg.onerror = null;
    lbImg.src = p.failed ? placeholder(current + 1) : p.src;
    lbImg.alt = photoAlt(p);
    lbImg.onerror = () => {
      lbImg.onerror = null;
      p.failed = true;
      lbImg.src = placeholder(current + 1);
    };
    lbCaption.textContent = photoAlt(p);
    lbCount.textContent = `${current + 1} / ${PHOTOS.length}`;

    // precarica le vicine
    [current + 1, current - 1].forEach((n) => {
      const q = PHOTOS[(n + PHOTOS.length) % PHOTOS.length];
      if (!q.failed) new Image().src = q.src;
    });
  };

  function openLightbox(i, trigger) {
    opener = trigger || null;
    showPhoto(i);
    lb.hidden = false;
    document.body.classList.add('no-scroll');
    lbClose.focus();
  }

  const closeLightbox = () => {
    lb.hidden = true;
    document.body.classList.remove('no-scroll');
    if (opener) opener.focus();
  };

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => showPhoto(current - 1));
  lbNext.addEventListener('click', () => showPhoto(current + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') showPhoto(current + 1);
    else if (e.key === 'ArrowLeft') showPhoto(current - 1);
    else if (e.key === 'Tab') {
      const f = [lbClose, lbPrev, lbNext];
      const idx = f.indexOf(document.activeElement);
      e.preventDefault();
      const next = e.shiftKey ? (idx <= 0 ? f.length - 1 : idx - 1) : (idx + 1) % f.length;
      f[next].focus();
    }
  });

  // swipe su mobile
  let startX = 0, startY = 0;
  lb.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) showPhoto(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* ---------- Animazioni allo scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Banner cookie ---------- */
  const KEY = 'khc_cookie_consent';
  const banner = $('#cookie');
  const prefs = $('#cookie-prefs');
  const btnAccept = $('#cookie-accept');
  const btnReject = $('#cookie-reject');
  const btnCustom = $('#cookie-customize');
  const btnSave = $('#cookie-save');
  const chkAnalytics = $('#pref-analytics');
  const chkMarketing = $('#pref-marketing');

  const readConsent = () => {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch (_) { return null; }
  };

  const saveConsent = (analytics, marketing) => {
    const consent = { necessary: true, analytics, marketing, date: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(consent)); } catch (_) { /* storage non disponibile */ }
    banner.hidden = true;
    // Gli script di terze parti (statistiche, pixel, ecc.) vanno caricati
    // solo in risposta a questo evento.
    window.dispatchEvent(new CustomEvent('khc:consent', { detail: consent }));
  };

  const showBanner = (withPrefs = false) => {
    const saved = readConsent();
    chkAnalytics.checked = !!(saved && saved.analytics);
    chkMarketing.checked = !!(saved && saved.marketing);
    prefs.hidden = !withPrefs;
    btnSave.hidden = !withPrefs;
    btnCustom.hidden = withPrefs;
    banner.hidden = false;
    (withPrefs ? btnSave : btnAccept).focus({ preventScroll: true });
  };

  btnAccept.addEventListener('click', () => saveConsent(true, true));
  btnReject.addEventListener('click', () => saveConsent(false, false));
  btnCustom.addEventListener('click', () => showBanner(true));
  btnSave.addEventListener('click', () => saveConsent(chkAnalytics.checked, chkMarketing.checked));
  $('#open-cookie-settings').addEventListener('click', () => showBanner(true));

  const existing = readConsent();
  if (existing) {
    window.dispatchEvent(new CustomEvent('khc:consent', { detail: existing }));
  } else {
    setTimeout(() => { banner.hidden = false; }, 700);
  }

  /* ---------- Cambio lingua (IT / EN) ---------- */
  const langBtns = document.querySelectorAll('.lang-btn');
  const metaDesc = $('meta[name="description"]');
  const metaOgTitle = $('meta[property="og:title"]');
  const metaOgDesc = $('meta[property="og:description"]');

  const applyLang = (l) => {
    if (!I18N[l]) return;
    lang = l;
    const dict = I18N[l];
    document.documentElement.lang = l;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const v = dict[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.dataset.i18nAttr.split(',').forEach((pair) => {
        const [attrName, key] = pair.split(':');
        if (dict[key] !== undefined) el.setAttribute(attrName, dict[key]);
      });
    });

    document.title = dict['meta.title'];
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);
    if (metaOgTitle) metaOgTitle.setAttribute('content', dict['meta.ogTitle']);
    if (metaOgDesc) metaOgDesc.setAttribute('content', dict['meta.ogDesc']);

    // galleria: didascalie e testi per screen reader
    gallery.querySelectorAll('.g-item').forEach((btn, i) => {
      const p = PHOTOS[i];
      btn.setAttribute('aria-label', `${t('zoom')}: ${photoAlt(p)}`);
      const im = btn.querySelector('img');
      if (im) im.alt = photoAlt(p);
    });
    if (!lb.hidden) showPhoto(current);

    // etichetta del pulsante menu e stato dei pulsanti lingua
    setMenu(nav.classList.contains('open'));
    langBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  };

  langBtns.forEach((b) => b.addEventListener('click', () => {
    applyLang(b.dataset.lang);
    try { localStorage.setItem(LANG_KEY, b.dataset.lang); } catch (_) { /* storage non disponibile */ }
  }));

  let startLang = DEFAULT_LANG;
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && I18N[saved]) startLang = saved;
  } catch (_) { /* storage non disponibile */ }
  applyLang(startLang);
})();
