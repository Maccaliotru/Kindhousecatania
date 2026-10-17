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

    { src: 'img/ingressocasa.jpeg', alt: 'Ingresso' },
    { src: 'img/ingressocasa2.jpeg', alt: 'Ingresso' },
    { src: 'img/ingressocasa3.jpeg', alt: 'Ingresso' },

    { src: 'img/giardino.jpeg', alt: 'Giardino' }, 

    { src: 'img/salone.jpeg', alt: 'Salone' },
    { src: 'img/salone2.jpeg', alt: 'Salone' },
    { src: 'img/salone3.jpeg', alt: 'Salone' },
    { src: 'img/salone4.jpeg', alt: 'Salone' },
    { src: 'img/salone5.jpeg', alt: 'Salone' },

    { src: 'img/cucina.jpeg', alt: 'Cucina' },
    { src: 'img/cucina2.jpeg', alt: 'Cucina' },
    { src: 'img/cucina3.jpeg', alt: 'Cucina' },
    { src: 'img/cucina4.jpeg', alt: 'Cucina' },

    { src: 'img/cameradaletto.jpeg', alt: 'Camera da letto' },
    { src: 'img/cameradaletto2.jpeg', alt: 'Camera da letto' },
    { src: 'img/cameradaletto3.jpeg', alt: 'Camera da letto' },
    { src: 'img/cameradaletto4.jpeg', alt: 'Camera da letto' },
    { src: 'img/cameradaletto5.jpeg', alt: 'Camera da letto' },

    { src: 'img/bagno.jpeg', alt: 'Bagno' },
    { src: 'img/bagno2.jpeg', alt: 'Bagno' },
    { src: 'img/bagno3.jpeg', alt: 'Bagno' },
    { src: 'img/bagno4.jpeg', alt: 'Bagno' },

    { src: 'img/box1.jpeg', alt: 'Parcheggio Custodito' },
    { src: 'img/box2.jpeg', alt: 'Parcheggio Custodito' },
    { src: 'img/box3.jpeg', alt: 'Parcheggio Custodito' },
    
    

    

    

    

    


    

  ];

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
      `<text x="400" y="425" text-anchor="middle" font-family="Georgia,serif" font-size="26" fill="#b58a35" fill-opacity=".85">Foto ${n}</text>` +
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
    toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
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
    li.setAttribute('aria-label', `Ingrandisci: ${photo.alt}`);

    const img = new Image();
    img.src = photo.src;
    img.alt = photo.alt;
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
    lbImg.alt = p.alt;
    lbImg.onerror = () => {
      lbImg.onerror = null;
      p.failed = true;
      lbImg.src = placeholder(current + 1);
    };
    lbCaption.textContent = p.alt;
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
})();
