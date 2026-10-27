/**
 * SAYANGNYA, AKU — MAIN APPLICATION
 * Handles intro typewriter, emotional section rendering,
 * modals, image lightboxes, scroll reveals, and ending screen.
 */

import { siteData } from '../data.js';
import { initParticleEngine } from './particles.js';
import { initAudioSystem, startAmbientBgm } from './audioPlayer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Ambient particle canvas
  initParticleEngine();

  // Audio system initialized with Mahalini track
  initAudioSystem(siteData.bgmTrack);

  // Render content sections
  renderChapter1();
  renderChapter2();
  renderChapter3();
  renderChapter4();
  setupGlobalModalEvents();

  // Start intro typewriter experience
  startTypewriter();

  // Initialize smooth scroll reveal observers
  setTimeout(setupScrollObservers, 100);
});

/* ─── TYPEWRITER INTRO ───────────────────────────────────── */
function startTypewriter() {
  const outputEl = document.getElementById('tw-output');
  const enterBox = document.getElementById('intro-enter');
  const masukBtn = document.getElementById('masuk-btn');
  const introScreen = document.getElementById('intro-screen');
  const mainExp = document.getElementById('main-experience');

  const lines = siteData.introLines || [
    { text: 'Ada hal yang sudah lama ingin kusampaikan.', pause: 1800 },
    { text: 'Tapi aku nggak selalu bisa bicara langsung.', pause: 1500 },
    { text: 'Jadi aku tuliskan di sini.', pause: 1200 }
  ];

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = '';

  function typeChar() {
    if (lineIdx >= lines.length) {
      if (enterBox) enterBox.classList.remove('hidden');
      return;
    }
    const target = lines[lineIdx].text;
    if (charIdx < target.length) {
      currentText += target.charAt(charIdx);
      if (outputEl) {
        outputEl.innerHTML = currentText + '<span class="tw-cursor">_</span>';
      }
      charIdx++;
      setTimeout(typeChar, 38 + Math.random() * 25);
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

  setTimeout(typeChar, 700);

  if (masukBtn) {
    masukBtn.addEventListener('click', () => {
      if (introScreen) introScreen.classList.add('fade-out');
      startAmbientBgm();
      setTimeout(() => {
        if (introScreen) introScreen.style.display = 'none';
        if (mainExp) mainExp.classList.remove('hidden');
        triggerHeroReveal();
      }, 1000);
    });
  }
}

function triggerHeroReveal() {
  const elems = document.querySelectorAll('.h-line, .h-divider, .h-sub, .hero-scroll');
  elems.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 260);
  });
}

/* ─── CHAPTER 1: AWAL CERITA ─────────────────────────────── */
function renderChapter1() {
  const ch = siteData.chapter1;
  if (!ch) return;

  const labelEl = document.getElementById('label-ch1');
  const introEl = document.getElementById('intro-ch1');
  const container = document.getElementById('timeline-container');

  if (labelEl) labelEl.textContent = ch.sectionLabel;
  if (introEl) introEl.textContent = ch.intro;

  if (container && ch.timeline) {
    container.innerHTML = ch.timeline.map(item => `
      <div class="timeline-item rev">
        <span class="tl-date">${item.date}</span>
        <h3 class="tl-title">${item.title}</h3>
        <p class="tl-story">${item.story}</p>
        <span class="tl-note">${item.note}</span>
      </div>
    `).join('');
  }
}

/* ─── CHAPTER 2: PERMINTAAN MAAF ────────────────────────── */
function renderChapter2() {
  const ch = siteData.chapter2;
  if (!ch) return;

  const labelEl = document.getElementById('label-ch2');
  const introEl = document.getElementById('intro-ch2');
  const container = document.getElementById('apologies-container');
  const closingEl = document.getElementById('apologies-closing');

  if (labelEl) labelEl.textContent = ch.sectionLabel;
  if (introEl) introEl.textContent = ch.intro;
  if (closingEl) closingEl.textContent = ch.closing;

  if (container && ch.apologies) {
    container.innerHTML = ch.apologies.map(item => `
      <div class="apology-item rev">
        <h3 class="apology-title">${item.title}</h3>
        <p class="apology-body">${item.body}</p>
      </div>
    `).join('');
  }
}

/* ─── CHAPTER 3: KETULUSAN DAN KENANGAN ──────────────────── */
function renderChapter3() {
  const ch = siteData.chapter3;
  if (!ch) return;

  const labelEl = document.getElementById('label-ch3');
  const introEl = document.getElementById('intro-ch3');
  const obsContainer = document.getElementById('observations-container');
  const photosContainer = document.getElementById('photos-container');

  if (labelEl) labelEl.textContent = ch.sectionLabel;
  if (introEl) introEl.textContent = ch.intro;

  if (obsContainer && ch.observations) {
    obsContainer.innerHTML = ch.observations.map((item, idx) => `
      <div class="obs-item rev">
        <span class="obs-idx">0${idx + 1}</span>
        <p class="obs-text">${item.text}</p>
      </div>
    `).join('');
  }

  if (photosContainer && ch.photos) {
    photosContainer.innerHTML = ch.photos.map(photo => `
      <div class="photo-card rev" data-img="${photo.image}" data-num="${photo.number}" data-note="${photo.note}" tabindex="0" role="button" aria-label="Lihat ${photo.number}">
        <div class="photo-card-img">
          <img src="${photo.image}" alt="${photo.number}" loading="lazy" />
        </div>
        <div class="photo-card-meta">
          <span class="photo-num">${photo.number}</span>
          <p class="photo-note">${photo.note}</p>
        </div>
      </div>
    `).join('');

    // Setup lightbox trigger
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lb-img');
    const lbNum = document.getElementById('lb-num');
    const lbNote = document.getElementById('lb-note');
    const lbClose = document.getElementById('lb-close');

    function openLightbox(img, num, note) {
      if (lbImg) lbImg.src = img;
      if (lbNum) lbNum.textContent = num;
      if (lbNote) lbNote.textContent = note;
      if (lightbox) {
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeLightbox() {
      if (lightbox) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    photosContainer.querySelectorAll('.photo-card').forEach(card => {
      card.addEventListener('click', () => {
        openLightbox(
          card.getAttribute('data-img'),
          card.getAttribute('data-num'),
          card.getAttribute('data-note')
        );
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(
            card.getAttribute('data-img'),
            card.getAttribute('data-num'),
            card.getAttribute('data-note')
          );
        }
      });
    });

    if (lbClose && lightbox) {
      lbClose.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
      });
    }
  }
}

/* ─── CHAPTER 4: PENUTUP ─────────────────────────────────── */
function renderChapter4() {
  const ch = siteData.chapter4;
  if (!ch) return;

  const labelEl = document.getElementById('label-ch4');
  const teaserEl = document.getElementById('teaser-container');
  const openBtn = document.getElementById('open-letter-btn');
  const letterModal = document.getElementById('letter-modal');
  const letterClose = document.getElementById('letter-close');
  const letterDone = document.getElementById('letter-done-btn');
  const salutationEl = document.getElementById('letter-salutation');
  const bodyEl = document.getElementById('letter-body');
  const closingEl = document.getElementById('letter-closing');
  const senderEl = document.getElementById('letter-sender');

  if (labelEl) labelEl.textContent = ch.sectionLabel;

  if (teaserEl && ch.teaser) {
    teaserEl.innerHTML = ch.teaser.map(line => `
      <p class="teaser-line rev">${line}</p>
    `).join('');
  }

  const letter = ch.letter;
  if (letter) {
    if (salutationEl) salutationEl.textContent = letter.salutation;
    if (bodyEl && letter.paragraphs) {
      bodyEl.innerHTML = letter.paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    if (closingEl) closingEl.textContent = letter.closing;
    if (senderEl) senderEl.textContent = letter.sender;
  }

  function openLetter() {
    if (letterModal) {
      letterModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLetter() {
    if (letterModal) {
      letterModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (openBtn) {
    openBtn.addEventListener('click', openLetter);
  }
  if (letterClose) {
    letterClose.addEventListener('click', closeLetter);
  }
  if (letterModal) {
    letterModal.addEventListener('click', (e) => {
      if (e.target === letterModal) closeLetter();
    });
  }
  if (letterDone) {
    letterDone.addEventListener('click', () => {
      closeLetter();
      triggerEnding();
    });
  }
}

/* ─── ENDING SCREEN ──────────────────────────────────────── */
function triggerEnding() {
  const ending = siteData.ending;
  const screen = document.getElementById('final-ending');
  if (!screen || !ending) return;

  const e1 = document.getElementById('e1');
  const e2 = document.getElementById('e2');
  const e3 = document.getElementById('e3');
  const eRule = screen.querySelector('.e-rule');
  const eSig = screen.querySelector('.e-sig');
  const eReplay = document.getElementById('e-replay');
  const eReplayBtn = document.getElementById('e-replay-btn');

  if (e1) e1.textContent = ending.line1;
  if (e2) e2.textContent = ending.line2;
  if (e3) e3.textContent = ending.final;

  // Reveal ending container
  screen.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => screen.classList.add('active'), 50);

  const reveals = [
    { el: e1, delay: 800 },
    { el: e2, delay: 2200 },
    { el: eRule, delay: 3500 },
    { el: e3, delay: 4800 },
    { el: eSig, delay: 6000 },
    { el: eReplay, delay: 7200 }
  ];

  reveals.forEach(({ el, delay }) => {
    if (el) setTimeout(() => el.classList.add('show'), delay);
  });

  if (eReplayBtn) {
    eReplayBtn.onclick = () => {
      screen.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        screen.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 600);
    };
  }
}

/* ─── GLOBAL MODAL ESCAPE LISTENER ───────────────────────── */
function setupGlobalModalEvents() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lightbox = document.getElementById('lightbox');
      const letterModal = document.getElementById('letter-modal');
      const finalEnding = document.getElementById('final-ending');

      if (lightbox && !lightbox.classList.contains('hidden')) {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
      if (letterModal && !letterModal.classList.contains('hidden')) {
        letterModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
      if (finalEnding && !finalEnding.classList.contains('hidden') && finalEnding.classList.contains('active')) {
        finalEnding.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => finalEnding.classList.add('hidden'), 500);
      }
    }
  });
}

/* ─── SCROLL OBSERVERS ───────────────────────────────────── */
function setupScrollObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rev, .apologies-closing').forEach(el => observer.observe(el));

  // Teaser lines stagger
  document.querySelectorAll('.teaser-line').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  // Timeline items stagger
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  // Observation items stagger
  document.querySelectorAll('.obs-item').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  // Photo cards stagger
  document.querySelectorAll('.photo-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });
}
