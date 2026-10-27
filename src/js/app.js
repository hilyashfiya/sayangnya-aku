/**
 * MAIN APP ORCHESTRATOR — REDESIGNED EMOTIONAL EXPERIENCE
 * Handles typewriter confession intro, hero thesis, interactive section rendering,
 * scattered photo stage, blur-reveals, time capsule, secret archive, and final ending.
 */

import { relationshipData } from '../data.js';
import { initParticleEngine } from './particles.js';
import { initAudioSystem, startAmbientBgm, playSoundEffect } from './audioPlayer.js';
import { initMemoryMap } from './memoryMap.js';
import { initSecretArchive } from './secretArchive.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Film Grain Canvas
  initParticleEngine();

  // 2. Populate Static Metadata
  populateMetadata();

  // 3. Initialize Audio Controller
  initAudioSystem(relationshipData.bgmTrack);

  // 4. Render All Interactive Content
  renderMemoryFiles();
  renderBlurMemories();
  renderHabits();
  renderSmallLoves();
  renderSounds();
  renderScatteredPhotos();
  renderOrdinaryDays();
  renderArchiveStats();
  renderInsideJokes();
  renderFutureLetter();
  renderFinalLetter();

  // 5. Initialize Map & Secret Archive
  initMemoryMap(relationshipData.places);
  initSecretArchive(relationshipData.secretArchive);

  // 6. Setup Floating Navigation & Drawer
  setupFloatingNav();

  // 7. Start Typewriter Confession Intro
  startTypewriterIntro();

  // 8. Setup Scroll Observers for Reveals & Question Stage
  setupScrollObservers();

  // 9. Hidden Footer Trigger for Secret Room
  setupHiddenSecretTrigger();
});

/* ==========================================================================
   METADATA & TYPEWRITER INTRO
   ========================================================================== */
function populateMetadata() {
  document.querySelectorAll('.data-archive-no').forEach(el => {
    el.textContent = relationshipData.archiveNumber || 'ARSIP #001';
  });
  document.querySelectorAll('.data-archive-date').forEach(el => {
    el.textContent = relationshipData.archiveDate || '9 Agustus 2026';
  });
  document.querySelectorAll('.data-boyfriend-name').forEach(el => {
    el.textContent = relationshipData.boyfriendName || '[NAMA DIA]';
  });
}

function startTypewriterIntro() {
  const outputEl = document.getElementById('typewriter-output');
  const cursorEl = document.getElementById('tw-cursor');
  const enterBox = document.getElementById('intro-enter');
  const masukBtn = document.getElementById('masuk-btn');
  const introScreen = document.getElementById('intro-screen');
  const mainExp = document.getElementById('main-experience');

  const lines = relationshipData.introLines || [
    { text: "Aku sebenarnya bingung harus mulai dari mana.", pause: 1500 },
    { text: "Karena ternyata...", pause: 1200 },
    { text: "ada terlalu banyak hal tentang kamu yang ingin kusimpan.", pause: 1800 },
    { text: "Jadi, aku membuat tempat kecil ini.", pause: 1200 }
  ];

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = "";

  function typeChar() {
    if (lineIdx >= lines.length) {
      // Done typing all lines
      if (enterBox) enterBox.classList.remove('hidden');
      return;
    }

    const targetLine = lines[lineIdx].text;
    if (charIdx < targetLine.length) {
      currentText += targetLine.charAt(charIdx);
      outputEl.innerHTML = currentText + '<span class="tw-cursor">_</span>';
      charIdx++;
      setTimeout(typeChar, 45 + Math.random() * 35);
    } else {
      // Line finished
      if (lineIdx < lines.length - 1) {
        currentText += "\n\n";
        charIdx = 0;
        lineIdx++;
        setTimeout(typeChar, lines[lineIdx - 1].pause || 1200);
      } else {
        lineIdx++;
        setTimeout(typeChar, 500);
      }
    }
  }

  // Start typing after a short initial pause
  setTimeout(typeChar, 800);

  // Click [ MASUK ] handler
  if (masukBtn) {
    masukBtn.addEventListener('click', () => {
      playSoundEffect('unseal');
      if (introScreen) introScreen.classList.add('fade-out');
      startAmbientBgm();

      setTimeout(() => {
        if (introScreen) introScreen.style.display = 'none';
        if (mainExp) mainExp.classList.remove('hidden');
        triggerHeroReveal();
      }, 1200);
    });
  }
}

function triggerHeroReveal() {
  const heroLines = document.querySelectorAll('.h-line, .h-rule, .h-sub, .h-meta, .hero-scroll-cue');
  heroLines.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * 350);
  });
}

/* ==========================================================================
   FLOATING NAV & DRAWER
   ========================================================================== */
function setupFloatingNav() {
  const indexBtn = document.getElementById('index-toggle-btn');
  const drawer = document.getElementById('index-drawer');
  const closeBtn = document.getElementById('index-close-btn');
  const navLinks = document.querySelectorAll('.idx-link');
  const bgmBtn = document.getElementById('bgm-floating-btn');

  if (indexBtn && drawer) {
    indexBtn.addEventListener('click', () => {
      playSoundEffect('click');
      drawer.classList.toggle('open');
      indexBtn.classList.toggle('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      if (indexBtn) indexBtn.classList.remove('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (drawer) drawer.classList.remove('open');
      if (indexBtn) indexBtn.classList.remove('open');
    });
  });

  if (bgmBtn) {
    bgmBtn.addEventListener('click', () => {
      playSoundEffect('click');
    });
  }
}

/* ==========================================================================
   SECTION 01: SEBUAH KENANGAN (Memory Archive Files)
   ========================================================================== */
function renderMemoryFiles() {
  const container = document.getElementById('memories-files');
  if (!container || !relationshipData.memories) return;

  container.innerHTML = relationshipData.memories.map(mem => `
    <div class="mem-file-card rev" data-mem-id="${mem.id}">
      <div class="mem-file-top">
        <span class="mem-file-no">FILE #${mem.number}</span>
        <span class="mem-file-date">${mem.date}</span>
      </div>
      <div class="mem-file-img">
        <img src="${mem.image}" alt="${mem.title}" loading="lazy" />
      </div>
      <div class="mem-file-body">
        <h3 class="mem-file-title heading-serif">${mem.title}</h3>
        <div class="mem-file-loc">📍 ${mem.location}</div>
        <p class="mem-file-teaser">${mem.story}</p>
        <div class="mem-file-open-hint">BUKA CATATAN →</div>
      </div>
    </div>
  `).join('');

  // Click card to open modal
  const cards = container.querySelectorAll('.mem-file-card');
  const modal = document.getElementById('memory-modal');
  const mClose = document.getElementById('memory-modal-close');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      playSoundEffect('click');
      const id = card.getAttribute('data-mem-id');
      const item = relationshipData.memories.find(m => m.id === id);
      if (item && modal) {
        document.getElementById('mmod-no').textContent = `FILE #${item.number}`;
        document.getElementById('mmod-date').textContent = item.date;
        document.getElementById('mmod-img').src = item.image;
        document.getElementById('mmod-title').textContent = item.title;
        document.getElementById('mmod-loc').textContent = `📍 ${item.location}`;
        document.getElementById('mmod-story').textContent = item.story;
        document.getElementById('mmod-note').textContent = `"${item.note}"`;
        modal.classList.remove('hidden');
      }
    });
  });

  if (mClose && modal) {
    mClose.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   SECTION 02: KAMU MUNGKIN SUDAH LUPA INI (Blur Reveal)
   ========================================================================== */
function renderBlurMemories() {
  const container = document.getElementById('blur-memories-container');
  if (!container || !relationshipData.blurMemories) return;

  container.innerHTML = relationshipData.blurMemories.map(mem => `
    <div class="blur-card rev">
      <div class="blur-photo-frame">
        <img src="${mem.image}" alt="${mem.revealTitle}" loading="lazy" />
        <div class="blur-overlay">
          <p class="blur-hint">"${mem.hint}"</p>
          <button class="blur-reveal-btn">[ INGATKAN AKU ]</button>
        </div>
      </div>
      <div class="blur-content">
        <h3 class="blur-content-title heading-serif">${mem.revealTitle}</h3>
        <p class="blur-content-date">${mem.date}</p>
        <p class="blur-content-story">${mem.story}</p>
        <p class="blur-content-note">"${mem.note}"</p>
      </div>
    </div>
  `).join('');

  const blurCards = container.querySelectorAll('.blur-card');
  blurCards.forEach(card => {
    const btn = card.querySelector('.blur-reveal-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        playSoundEffect('unseal');
        card.classList.add('revealed');
      });
    }
  });
}

/* ==========================================================================
   SECTION 03: KEBIASAAN KECILMU (Numbered Expand Cards)
   ========================================================================== */
function renderHabits() {
  const container = document.getElementById('habits-container');
  if (!container || !relationshipData.habits) return;

  container.innerHTML = relationshipData.habits.map(habit => `
    <div class="habit-num-card rev">
      <div class="habit-num-trigger">
        <span class="habit-num-no">[ ${habit.number} ]</span>
        <span class="habit-num-plus">+</span>
      </div>
      <div class="habit-num-content">
        <h3 class="habit-num-title heading-serif">${habit.title}</h3>
        <p class="habit-num-desc">${habit.description}</p>
      </div>
    </div>
  `).join('');

  const habitCards = container.querySelectorAll('.habit-num-card');
  habitCards.forEach(card => {
    card.addEventListener('click', () => {
      playSoundEffect('click');
      card.classList.toggle('open');
    });
  });
}

/* ==========================================================================
   SECTION 04: HAL-HAL KECIL YANG AKU SUKA (Non-romantic Observations)
   ========================================================================== */
function renderSmallLoves() {
  const container = document.getElementById('small-loves-container');
  if (!container || !relationshipData.smallLoves) return;

  container.innerHTML = relationshipData.smallLoves.map((item, idx) => `
    <div class="sl-item">
      <span class="sl-idx">0${idx + 1}</span>
      <p class="sl-text">${item.text}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   SECTION 05: SUARA YANG KUKENAL (Sound Objects)
   ========================================================================== */
function renderSounds() {
  const container = document.getElementById('sounds-container');
  if (!container || !relationshipData.sounds) return;

  container.innerHTML = relationshipData.sounds.map(snd => `
    <div class="sound-obj rev" data-sound-id="${snd.id}">
      <div class="sound-obj-ring">
        <div class="waveform-mini">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
      </div>
      <span class="sound-obj-label">${snd.label}</span>
      <p class="sound-obj-reason">"${snd.reason}"</p>
    </div>
  `).join('');

  const soundObjs = container.querySelectorAll('.sound-obj');
  soundObjs.forEach(obj => {
    obj.addEventListener('click', () => {
      playSoundEffect('click');
      soundObjs.forEach(o => { if (o !== obj) o.classList.remove('active'); });
      obj.classList.toggle('active');
    });
  });
}

/* ==========================================================================
   SECTION 07: BUKTI-BUKTI KECIL (Scattered Photos)
   ========================================================================== */
function renderScatteredPhotos() {
  const container = document.getElementById('evidence-container');
  if (!container || !relationshipData.evidence) return;

  const rotations = [-2.5, 3, -1.8, 2.2, -3, 1.5];

  container.innerHTML = relationshipData.evidence.map((item, idx) => {
    const rot = rotations[idx % rotations.length];
    return `
      <div class="photo-scatter rev" style="transform: rotate(${rot}deg);" data-img="${item.image}" data-tag="${item.number}" data-note="${item.note}">
        <div class="photo-scatter-img">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="photo-scatter-meta">
          <span class="photo-scatter-tag">${item.number}</span>
          <p class="photo-scatter-cap">"${item.note}"</p>
        </div>
      </div>
    `;
  }).join('');

  const photos = container.querySelectorAll('.photo-scatter');
  const lbModal = document.getElementById('lightbox-modal');
  const lbImg = document.getElementById('lightbox-img');
  const lbTag = document.getElementById('lb-tag');
  const lbNote = document.getElementById('lb-note');
  const lbClose = document.getElementById('lightbox-close-btn');

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      playSoundEffect('click');
      if (lbImg) lbImg.src = photo.getAttribute('data-img');
      if (lbTag) lbTag.textContent = photo.getAttribute('data-tag');
      if (lbNote) lbNote.textContent = `"${photo.getAttribute('data-note')}"`;
      if (lbModal) lbModal.classList.remove('hidden');
    });
  });

  if (lbClose && lbModal) {
    lbClose.addEventListener('click', () => lbModal.classList.add('hidden'));
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal) lbModal.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   SECTION 08: HARI-HARI YANG BIASA (Ordinary Days)
   ========================================================================== */
function renderOrdinaryDays() {
  const container = document.getElementById('ordinary-days-container');
  if (!container || !relationshipData.ordinaryDays) return;

  container.innerHTML = relationshipData.ordinaryDays.map(item => `
    <div class="od-item rev">
      <p class="od-text">${item.text}</p>
      <span class="od-note">"${item.note}"</span>
    </div>
  `).join('');
}

/* ==========================================================================
   SECTION 09: STATISTIK ARSIP (Personalized Counters)
   ========================================================================== */
function renderArchiveStats() {
  const container = document.getElementById('stats-display');
  if (!container || !relationshipData.archiveStats) return;

  container.innerHTML = relationshipData.archiveStats.map(stat => `
    <div class="stat-item rev">
      <span class="stat-value" data-val="${stat.numeric || ''}">${stat.animated ? '000' : stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

function animateStatsCounters() {
  const statValues = document.querySelectorAll('.stat-value[data-val]');
  statValues.forEach(el => {
    const target = parseInt(el.getAttribute('data-val'), 10);
    if (isNaN(target)) return;

    let current = 0;
    const step = Math.max(1, Math.floor(target / 25));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      el.textContent = current < 10 ? `00${current}` : current < 100 ? `0${current}` : `${current}`;
    }, 40);
  });
}

/* ==========================================================================
   SECTION 10: ABSURD TAPI KITA (Inside Jokes & Humor)
   ========================================================================== */
function renderInsideJokes() {
  const container = document.getElementById('jokes-container');
  if (!container || !relationshipData.insideJokes) return;

  container.innerHTML = relationshipData.insideJokes.map((joke, idx) => `
    <div class="humor-card rev">
      <div class="humor-card-idx">#0${idx + 1}</div>
      <h3 class="humor-card-title heading-serif">${joke.title}</h3>
      <p class="humor-card-story">${joke.story}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   SECTION 12: UNTUK MASA DEPAN (Time Capsule)
   ========================================================================== */
function renderFutureLetter() {
  const fl = relationshipData.futureLetter;
  const sealBtn = document.getElementById('unseal-capsule-btn');
  const sealText = document.getElementById('capsule-seal-text');
  const dateDisplay = document.getElementById('capsule-date-display');
  const bodyEl = document.getElementById('capsule-letter-body');

  if (!fl) return;

  if (dateDisplay) dateDisplay.textContent = relationshipData.archiveDate || '9 Agustus 2026';
  if (sealText) sealText.textContent = fl.sealText || 'Buka Jika Kamu Menemukan Ini Lagi';

  if (bodyEl && fl.paragraphs) {
    bodyEl.innerHTML = fl.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  if (sealBtn && bodyEl) {
    sealBtn.addEventListener('click', () => {
      playSoundEffect('unseal');
      bodyEl.classList.remove('hidden');
      setTimeout(() => bodyEl.classList.add('reveal'), 50);
      sealBtn.style.opacity = '0.4';
      sealBtn.style.pointerEvents = 'none';
    });
  }
}

/* ==========================================================================
   SECTION 13: SATU HAL TERAKHIR (Final Letter Modal)
   ========================================================================== */
function renderFinalLetter() {
  const triggerBtn = document.getElementById('open-final-letter-btn');
  const modal = document.getElementById('letter-modal');
  const closeBtn = document.getElementById('letter-close-btn');
  const finishBtn = document.getElementById('letter-finish-btn');
  const bodyEl = document.getElementById('final-letter-paragraphs');

  const letter = relationshipData.finalLetter;
  if (!letter) return;

  if (bodyEl && letter.paragraphs) {
    bodyEl.innerHTML = letter.paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  if (triggerBtn && modal) {
    triggerBtn.addEventListener('click', () => {
      playSoundEffect('unseal');
      modal.classList.remove('hidden');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      playSoundEffect('click');
      if (modal) modal.classList.add('hidden');
      triggerFinalEnding();
    });
  }
}

/* ==========================================================================
   HIDDEN SECRET ROOM TRIGGER
   ========================================================================== */
function setupHiddenSecretTrigger() {
  const footerNo = document.querySelector('.footer-no');
  const secretModal = document.getElementById('secret-modal');
  let clickCount = 0;

  if (footerNo && secretModal) {
    footerNo.style.cursor = 'pointer';
    footerNo.addEventListener('click', () => {
      clickCount++;
      if (clickCount >= 3) {
        playSoundEffect('unseal');
        secretModal.classList.remove('hidden');
        clickCount = 0;
      }
    });
  }
}

/* ==========================================================================
   FINAL ENDING SCREEN
   ========================================================================== */
function triggerFinalEnding() {
  const endingScreen = document.getElementById('final-ending');
  const stats = relationshipData.endingStats;
  if (!endingScreen || !stats) return;

  endingScreen.classList.remove('hidden');
  setTimeout(() => endingScreen.classList.add('active'), 50);

  const e1 = document.getElementById('e1');
  const e2 = document.getElementById('e2');
  const e3 = document.getElementById('e3');
  const e4 = document.getElementById('e4');
  const e5 = document.getElementById('e5');
  const e6 = document.getElementById('e6');
  const e7 = document.getElementById('e7');

  if (e1) e1.textContent = "ARSIP INI BELUM SELESAI.";
  if (e2) e2.textContent = stats.line1 || "Karena kita juga belum selesai.";
  if (e3) e3.textContent = stats.line2 || "Masih ada tempat yang belum kita datangi.";
  if (e4) e4.textContent = stats.line3 || "Masih ada foto yang belum kita ambil.";
  if (e5) e5.textContent = "Masih ada cerita yang belum kita tahu.";
  if (e6) e6.textContent = "Jadi...";
  if (e7) e7.textContent = stats.line4 || "Sampai nanti.";

  // Sequenced reveals
  const elements = [
    { el: e1, delay: 1000 },
    { el: document.querySelector('.e-sep'), delay: 2000 },
    { el: e2, delay: 3500 },
    { el: e3, delay: 5000 },
    { el: e4, delay: 6500 },
    { el: e5, delay: 8000 },
    { el: e6, delay: 10000 },
    { el: e7, delay: 11500 },
    { el: document.querySelector('.e-archive-tag'), delay: 13000 }
  ];

  elements.forEach(item => {
    if (item.el) {
      setTimeout(() => item.el.classList.add('show'), item.delay);
    }
  });
}

/* ==========================================================================
   SCROLL OBSERVERS (Reveals & Question Stage)
   ========================================================================== */
function setupScrollObservers() {
  // 1. General element reveal on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rev, .sl-item').forEach(el => revealObserver.observe(el));

  // 2. Stats counter trigger on scroll
  let animatedStats = false;
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        animateStatsCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.getElementById('statistik');
  if (statsSection) statsObserver.observe(statsSection);

  // 3. Question stage scroll reveal
  const qObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => document.getElementById('q1')?.classList.add('visible'), 300);
        setTimeout(() => document.getElementById('q2')?.classList.add('visible'), 1600);
        setTimeout(() => document.getElementById('q3')?.classList.add('visible'), 3200);
        setTimeout(() => document.getElementById('q4')?.classList.add('visible'), 5000);
        qObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const qSection = document.getElementById('pertanyaan');
  if (qSection) qObserver.observe(qSection);
}
