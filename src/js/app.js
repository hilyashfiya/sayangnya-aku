/**
 * SAYANGNYA, AKU — MAIN APPLICATION
 * Surat cinta digital personal dari Hilyatul Ashfiya untuk pasangannya.
 * Mengatur alur 4 bab, intro typewriter, pemutar musik Mahalini, dan lightbox foto.
 */

import { siteData } from '../data.js';
import { initParticleEngine } from './particles.js';
import { initAudioSystem, startAmbientBgm } from './audioPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi latar tekstur halus
  initParticleEngine();

  // 2. Inisialisasi sistem audio dengan lagu Mahalini — Mencintaimu
  initAudioSystem(siteData.bgmTrack);

  // 3. Render seluruh bagian konten surat
  renderHeroContent();
  renderChapter1();
  renderChapter2();
  renderChapter3();
  renderChapter4();

  // 4. Inisialisasi modal lightbox
  setupLightbox();

  // 5. Mulai intro interaktif (layar pembuka)
  startIntroTypewriter();

  // 6. Pasang scroll observer untuk transisi muncul yang anggun
  setTimeout(setupScrollObservers, 150);
});

/* ─── INTRO ENVELOPE TYPEWRITER ──────────────────────────── */
function startIntroTypewriter() {
  const outputEl = document.getElementById('tw-output');
  const enterBox = document.getElementById('intro-enter');
  const masukBtn = document.getElementById('masuk-btn');
  const introScreen = document.getElementById('intro-screen');
  const mainExp = document.getElementById('main-experience');

  const lines = siteData.intro?.lines || [
    { text: "Ada hal yang sudah lama ingin kusampaikan kepadamu...", pause: 1800 },
    { text: "Tentang kita, tentang maaf yang terlambat, dan tentang bagaimana perasaanku yang sebenarnya.", pause: 1600 },
    { text: "Jadi aku tuliskan semuanya di sini.", pause: 1200 }
  ];

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = '';

  function typeChar() {
    if (!outputEl) return;

    if (lineIdx >= lines.length) {
      if (enterBox) enterBox.classList.remove('hidden');
      return;
    }

    const targetLine = lines[lineIdx].text;
    if (charIdx < targetLine.length) {
      currentText += targetLine.charAt(charIdx);
      outputEl.innerHTML = currentText + '<span class="tw-cursor">_</span>';
      charIdx++;
      setTimeout(typeChar, 36 + Math.random() * 24);
    } else {
      if (lineIdx < lines.length - 1) {
        currentText += '\n\n';
        charIdx = 0;
        lineIdx++;
        setTimeout(typeChar, lines[lineIdx - 1].pause || 1400);
      } else {
        lineIdx++;
        setTimeout(typeChar, 500);
      }
    }
  }

  // Mulai ketik setelah jeda awal yang tenang
  setTimeout(typeChar, 800);

  if (masukBtn) {
    masukBtn.addEventListener('click', () => {
      // Fade out layar intro
      if (introScreen) introScreen.classList.add('fade-out');

      // Putar musik Mahalini dengan fade-in lembut
      startAmbientBgm();

      setTimeout(() => {
        if (introScreen) introScreen.style.display = 'none';
        if (mainExp) mainExp.classList.remove('hidden');
        triggerHeroReveal();
      }, 950);
    });
  }
}

/* ─── HERO REVEAL ────────────────────────────────────────── */
function renderHeroContent() {
  // Title & Subtitle disiapkan
}

function triggerHeroReveal() {
  const elems = document.querySelectorAll(
    '.hero-envelope-mark, .hero-title, .hero-divider, .hero-subtitle, .hero-scroll-indicator'
  );
  elems.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, idx * 240);
  });
}

/* ─── BAGIAN 1: DARI SEBUAH PERTEMUAN SEDERHANA ──────────── */
function renderChapter1() {
  const ch = siteData.chapter1;
  if (!ch) return;

  const tagEl = document.getElementById('tag-ch1');
  const titleEl = document.getElementById('title-ch1');
  const subEl = document.getElementById('sub-ch1');
  const container = document.getElementById('timeline-container');

  if (tagEl) tagEl.textContent = ch.tag;
  if (titleEl) titleEl.textContent = ch.title;
  if (subEl) subEl.textContent = ch.subtitle;

  if (container && ch.timeline) {
    container.innerHTML = ch.timeline.map(item => `
      <article class="timeline-item rev">
        <span class="tl-date">${item.date}</span>
        <h3 class="tl-title">${item.title}</h3>
        <p class="tl-desc">${item.description}</p>
        <p class="tl-note">${item.note}</p>
      </article>
    `).join('');
  }
}

/* ─── BAGIAN 2: MAAF, KARENA AKU BELUM SELALU TAHU CARANYA ── */
function renderChapter2() {
  const ch = siteData.chapter2;
  if (!ch) return;

  const tagEl = document.getElementById('tag-ch2');
  const titleEl = document.getElementById('title-ch2');
  const subEl = document.getElementById('sub-ch2');
  const bodyContainer = document.getElementById('letter-body-container');
  const quoteContainer = document.getElementById('letter-closing-reflect');

  if (tagEl) tagEl.textContent = ch.tag;
  if (titleEl) titleEl.textContent = ch.title;
  if (subEl) subEl.textContent = ch.subtitle;

  if (bodyContainer && ch.paragraphs) {
    bodyContainer.innerHTML = ch.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (quoteContainer && ch.closingReflect) {
    quoteContainer.innerHTML = `
      <p>“${ch.closingReflect}”</p>
    `;
  }
}

/* ─── BAGIAN 3: KALAU AKU MASIH BOLEH BELAJAR MENCINTAIMU ─── */
function renderChapter3() {
  const ch = siteData.chapter3;
  if (!ch) return;

  const tagEl = document.getElementById('tag-ch3');
  const titleEl = document.getElementById('title-ch3');
  const subEl = document.getElementById('sub-ch3');
  const learningEl = document.getElementById('learning-content');
  const photosTitleEl = document.getElementById('photos-title');
  const photosSubEl = document.getElementById('photos-subtitle');
  const photosGrid = document.getElementById('photos-grid');

  if (tagEl) tagEl.textContent = ch.tag;
  if (titleEl) titleEl.textContent = ch.title;
  if (subEl) subEl.textContent = ch.subtitle;

  if (learningEl && ch.paragraphs) {
    learningEl.innerHTML = ch.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (photosTitleEl && ch.photosTitle) photosTitleEl.textContent = ch.photosTitle;
  if (photosSubEl && ch.photosSubtitle) photosSubEl.textContent = ch.photosSubtitle;

  if (photosGrid && ch.photos) {
    photosGrid.innerHTML = ch.photos.map(photo => `
      <div class="photo-card" 
           data-img="${photo.image}" 
           data-caption="${photo.caption}" 
           data-desc="${photo.description}"
           tabindex="0" 
           role="button" 
           aria-label="Lihat foto: ${photo.caption}">
        <div class="photo-img-wrapper">
          <img src="${photo.image}" alt="${photo.caption}" loading="lazy" />
        </div>
        <div class="photo-meta">
          <h4 class="photo-caption">${photo.caption}</h4>
          <p class="photo-desc">${photo.description}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ─── BAGIAN 4: AKU HANYA INGIN KAMU TAHU ────────────────── */
function renderChapter4() {
  const ch = siteData.chapter4;
  if (!ch) return;

  const tagEl = document.getElementById('tag-ch4');
  const titleEl = document.getElementById('title-ch4');
  const subEl = document.getElementById('sub-ch4');
  const closingContainer = document.getElementById('closing-paragraphs');
  const salutationEl = document.getElementById('closing-salutation');
  const signatureEl = document.getElementById('closing-signature');

  if (tagEl) tagEl.textContent = ch.tag;
  if (titleEl) titleEl.textContent = ch.title;
  if (subEl) subEl.textContent = ch.subtitle;

  if (closingContainer && ch.paragraphs) {
    closingContainer.innerHTML = ch.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (salutationEl && ch.closingSalutation) salutationEl.textContent = ch.closingSalutation;
  if (signatureEl && ch.signature) signatureEl.textContent = ch.signature;
}

/* ─── LIGHTBOX MODAL SETUP ───────────────────────────────── */
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbDesc = document.getElementById('lb-desc');
  const lbClose = document.getElementById('lb-close');

  function openLightbox(img, caption, desc) {
    if (!lightbox) return;
    if (lbImg) lbImg.src = img;
    if (lbCaption) lbCaption.textContent = caption;
    if (lbDesc) lbDesc.textContent = desc;

    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Delegasi klik pada kartu foto
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.photo-card');
    if (card) {
      openLightbox(
        card.getAttribute('data-img'),
        card.getAttribute('data-caption'),
        card.getAttribute('data-desc')
      );
    }
  });

  // Dukungan aksesibilitas keyboard (Enter / Spasi)
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement.classList.contains('photo-card')) {
      e.preventDefault();
      const card = document.activeElement;
      openLightbox(
        card.getAttribute('data-img'),
        card.getAttribute('data-caption'),
        card.getAttribute('data-desc')
      );
    }

    if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });

  if (lbClose) {
    lbClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
}

/* ─── SCROLL REVEAL OBSERVERS ────────────────────────────── */
function setupScrollObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.rev').forEach(el => observer.observe(el));

  // Staggering halus untuk timeline items
  document.querySelectorAll('.timeline-item').forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 0.12}s`;
  });
}
