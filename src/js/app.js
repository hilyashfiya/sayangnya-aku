/**
 * SAYANGNYA, AKU — MAIN APPLICATION
 * Surat cinta digital personal dari Hilyatul Ashfiya untuk Muhammad Rafli Al Kaylaniy.
 * Mengatur alur 4 bab, intro typewriter, pemutar musik Mahalini, 
 * arsip kenangan 19 foto dengan ritme editorial, dan penutup emosional.
 */

import { siteData } from '../data.js';
import { initParticleEngine } from './particles.js';
import { initAudioSystem, startAmbientBgm } from './audioPlayer.js';

let activeMemoryIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi latar tekstur halus (stardust/silver dust ambient)
  initParticleEngine();

  // 2. Inisialisasi sistem audio dengan lagu Mahalini — Mencintaimu
  initAudioSystem(siteData.bgmTrack);

  // 3. Render seluruh bagian konten surat & penutup
  renderChapter1();
  renderChapter2();
  renderChapter3();
  renderChapter4();
  renderFinalClosing();

  // 4. Inisialisasi modal scrapbook lightbox (19 dokumentasi)
  setupScrapbookModal();

  // 5. Mulai intro interaktif (layar pembuka surat bersegel)
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
  const introCard = document.getElementById('intro-card');
  const skipBtn = document.getElementById('intro-skip-btn');
  const mainExp = document.getElementById('main-experience');

  const lines = siteData.intro?.lines || [
    { text: "Ada hal yang sudah lama ingin kusampaikan kepadamu...", pause: 800 },
    { text: "Tentang kita, tentang maaf yang terlambat, dan tentang bagaimana perasaanku yang sebenarnya.", pause: 900 },
    { text: "Jadi aku tuliskan semuanya di sini.", pause: 600 }
  ];

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = '';
  let isTypingFinished = false;
  let typeTimer = null;

  function finishTypewriterInstantly() {
    if (isTypingFinished) return;
    isTypingFinished = true;
    if (typeTimer) clearTimeout(typeTimer);

    // Tampilkan seluruh teks secara utuh
    const fullText = lines.map(l => l.text).join('\n\n');
    if (outputEl) {
      outputEl.innerHTML = fullText;
    }
    if (enterBox) {
      enterBox.classList.remove('hidden');
    }
    if (skipBtn) {
      skipBtn.style.display = 'none';
    }
  }

  function typeChar() {
    if (!outputEl || isTypingFinished) return;

    if (lineIdx >= lines.length) {
      finishTypewriterInstantly();
      return;
    }

    const targetLine = lines[lineIdx].text;
    if (charIdx < targetLine.length) {
      currentText += targetLine.charAt(charIdx);
      outputEl.innerHTML = currentText + '<span class="tw-cursor">_</span>';
      charIdx++;
      typeTimer = setTimeout(typeChar, 24 + Math.random() * 16);
    } else {
      if (lineIdx < lines.length - 1) {
        currentText += '\n\n';
        charIdx = 0;
        lineIdx++;
        typeTimer = setTimeout(typeChar, lines[lineIdx - 1].pause || 800);
      } else {
        lineIdx++;
        typeTimer = setTimeout(typeChar, 400);
      }
    }
  }

  // Mulai ketik setelah jeda awal yang tenang
  typeTimer = setTimeout(typeChar, 500);

  // Tombol skip untuk langsung menampilkan seluruh teks
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      finishTypewriterInstantly();
    });
  }

  // Klik kartu intro juga menyelesaikan animasi tanpa menunggu
  if (introCard) {
    introCard.addEventListener('click', (e) => {
      if (!isTypingFinished && e.target !== masukBtn) {
        finishTypewriterInstantly();
      }
    });
  }

  if (masukBtn) {
    masukBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Fade out layar intro
      if (introScreen) introScreen.classList.add('fade-out');

      // Putar musik Mahalini dengan fade-in lembut
      startAmbientBgm();

      setTimeout(() => {
        if (introScreen) introScreen.style.display = 'none';
        if (mainExp) mainExp.classList.remove('hidden');
        triggerHeroReveal();
      }, 850);
    });
  }
}

/* ─── HERO REVEAL ────────────────────────────────────────── */
function triggerHeroReveal() {
  const elems = document.querySelectorAll(
    '.hero-archive-label, .hero-title, .hero-rule, .hero-tagline, .hero-scroll-cue'
  );
  elems.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, idx * 180);
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
        <p class="tl-desc">${item.description.replace(/\n\n/g, '<br><br>')}</p>
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
  const scrapbookTitleEl = document.getElementById('scrapbook-title');
  const scrapbookSubEl = document.getElementById('scrapbook-subtitle');
  const scrapbookGrid = document.getElementById('scrapbook-grid');

  if (tagEl) tagEl.textContent = ch.tag;
  if (titleEl) titleEl.textContent = ch.title;
  if (subEl) subEl.textContent = ch.subtitle;

  if (learningEl && ch.paragraphs) {
    learningEl.innerHTML = ch.paragraphs.map(p => `
      <p>${p}</p>
    `).join('');
  }

  if (scrapbookTitleEl && ch.scrapbookTitle) scrapbookTitleEl.textContent = ch.scrapbookTitle;
  if (scrapbookSubEl && ch.scrapbookSubtitle) scrapbookSubEl.textContent = ch.scrapbookSubtitle;

  // Curated layout types for 19 memories creating an intentional editorial rhythm
  const layoutTypes = [
    'editorial', // 01 (12 cols) - Sebentar, tapi mengobati rindu (pertemuan terakhir sebelum LDR)
    'standard',  // 02 (4 cols)  - Chat yang selalu kubaca dengan senyum
    'wide',      // 03 (8 cols)  - Kamu mengusahakan untuk bertemu (datang ke rumah)
    'standard',  // 04 (4 cols)  - Celana kuning kesayanganku hehe
    'wide',      // 05 (8 cols)  - My hero after my dad
    'editorial', // 06 (12 cols) - Ulang tahun yang ada kamunya (Jakarta Selatan)
    'standard',  // 07 (4 cols)  - Hal sederhana yang bikin aku bangga (beres-beres)
    'standard',  // 08 (4 cols)  - Teman ke rumah sakit, si ganteng rambut pendek
    'standard',  // 09 (4 cols)  - Akhirnya punya waktu berdua (pasca KKN)
    'wide',      // 10 (8 cols)  - Kamu tetap datang buat aku (drop KKN Ciamis)
    'standard',  // 11 (4 cols)  - Hari ketika kita saling jujur (menyampaikan perasaan)
    'standard',  // 12 (4 cols)  - Date di tempat elitis hihi
    'wide',      // 13 (8 cols)  - Aku ingin ada saat kamu lelah (kejutan Bandung)
    'editorial', // 14 (12 cols) - Foto pertama kita hehe (kopi bareng & paparazzi)
    'standard',  // 15 (4 cols)  - Hadiah kecil untuk hari spesialmu
    'standard',  // 16 (4 cols)  - Bahkan urusan rok pun dibantu
    'standard',  // 17 (4 cols)  - Tidur yang bikin aku ikut tenang
    'standard',  // 18 (4 cols)  - Malam Truth or Dare
    'wide'       // 19 (8 cols)  - Terima kasih sudah mendengarkan aku (curug)
  ];

  if (scrapbookGrid && ch.memories) {
    scrapbookGrid.innerHTML = ch.memories.map((item, idx) => {
      const numStr = item.id < 10 ? `0${item.id}` : `${item.id}`;
      const layoutType = layoutTypes[idx] || 'standard';
      return `
        <div class="memory-card polaroid-card rev" 
             data-index="${idx}"
             data-layout="${layoutType}"
             tabindex="0" 
             role="button" 
             aria-label="Buka arsip kenangan nomor ${item.id}: ${item.title}">
          <div class="memory-img-wrap polaroid-img-wrap">
            <img class="memory-img polaroid-img" 
                 src="./assets/images/${item.id}.jpg" 
                 alt="${item.title}" 
                 loading="lazy" 
                 onerror="this.onerror=null; this.src='./assets/images/${item.id}.jpeg';" />
            <span class="memory-stamp">#${numStr}</span>
          </div>
          <div class="memory-meta polaroid-meta">
            <div class="memory-meta-header">
              <span class="memory-date">${item.date}</span>
              <span class="memory-tag-archive">ARSIP #${numStr}</span>
            </div>
            <h4 class="memory-title polaroid-title">${item.title}</h4>
            <p class="memory-caption-preview polaroid-caption-preview">${item.caption}</p>
            <div class="memory-read-hint polaroid-action-hint">
              <span>Buka Cerita</span> &rarr;
            </div>
          </div>
        </div>
      `;
    }).join('');
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

/* ─── FINAL CLOSING — THE LAST THING HE READS ───────────── */
function renderFinalClosing() {
  const fc = siteData.finalClosing;
  if (!fc) return;

  const line1El = document.getElementById('final-line1');
  const nameEl = document.getElementById('final-name');
  const heartEl = document.getElementById('final-heart');

  if (line1El && fc.line1) line1El.textContent = fc.line1;
  if (nameEl && fc.dedicatedTo) nameEl.textContent = fc.dedicatedTo;
  if (heartEl && fc.symbol) heartEl.textContent = fc.symbol;
}

/* ─── SCRAPBOOK DETAIL MODAL (LIGHTBOX) ──────────────────── */
function setupScrapbookModal() {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCounter = document.getElementById('lb-counter');
  const lbDate = document.getElementById('lb-date');
  const lbTitle = document.getElementById('lb-title');
  const lbDesc = document.getElementById('lb-desc');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');

  const memories = siteData.chapter3?.memories || [];
  const total = memories.length;

  function showMemory(idx) {
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    activeMemoryIndex = idx;

    const item = memories[idx];
    if (!item) return;

    if (lbImg) {
      lbImg.src = `./assets/images/${item.id}.jpg`;
      lbImg.onerror = () => {
        lbImg.src = `./assets/images/${item.id}.jpeg`;
      };
      lbImg.alt = item.title;
    }
    if (lbCounter) lbCounter.textContent = `Arsip ${item.id} dari ${total}`;
    if (lbDate) lbDate.textContent = item.date;
    if (lbTitle) lbTitle.textContent = item.title;
    if (lbDesc) lbDesc.textContent = item.caption;

    if (lightbox) {
      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Delegasi klik pada kartu arsip kenangan
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.memory-card, .polaroid-card');
    if (card) {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        showMemory(idx);
      }
    }
  });

  // Tombol navigasi modal
  if (lbPrev) {
    lbPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      showMemory(activeMemoryIndex - 1);
    });
  }

  if (lbNext) {
    lbNext.addEventListener('click', (e) => {
      e.stopPropagation();
      showMemory(activeMemoryIndex + 1);
    });
  }

  if (lbClose) {
    lbClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight, Enter)
  document.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showMemory(activeMemoryIndex - 1);
      } else if (e.key === 'ArrowRight') {
        showMemory(activeMemoryIndex + 1);
      }
    } else {
      if ((e.key === 'Enter' || e.key === ' ') && (document.activeElement.classList.contains('memory-card') || document.activeElement.classList.contains('polaroid-card'))) {
        e.preventDefault();
        const idx = parseInt(document.activeElement.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          showMemory(idx);
        }
      }
    }
  });
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
    threshold: 0.06,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.rev').forEach(el => observer.observe(el));

  // Staggering halus untuk timeline items
  document.querySelectorAll('.timeline-item').forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 0.1}s`;
  });

  // Staggering halus untuk memory cards
  document.querySelectorAll('.memory-card, .polaroid-card').forEach((el, idx) => {
    el.style.transitionDelay = `${(idx % 3) * 0.08}s`;
  });
}
