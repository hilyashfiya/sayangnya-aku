/**
 * AUDIO ENGINE & BGM CONTROLLER
 * Controls playback of Mahalini's "Mencintaimu" with gentle fade-in,
 * UI sync, and fallback ambient synth drone.
 */

let audioCtx = null;
let bgmAudio = null;
let isBgmPlaying = false;
let synthOsc1 = null;
let synthOsc2 = null;
let synthGain = null;

export function initAudioSystem(bgmTrackUrl) {
  const bgmBtn = document.getElementById('bgm-btn');

  if (bgmTrackUrl) {
    bgmAudio = new Audio(encodeURI(bgmTrackUrl));
    bgmAudio.loop = true;
    bgmAudio.volume = 0.4;
    bgmAudio.preload = 'auto';

    bgmAudio.addEventListener('play', () => {
      isBgmPlaying = true;
      updateBgmUi(true);
    });

    bgmAudio.addEventListener('pause', () => {
      isBgmPlaying = false;
      updateBgmUi(false);
    });

    bgmAudio.addEventListener('ended', () => {
      isBgmPlaying = false;
      updateBgmUi(false);
    });
  }

  if (bgmBtn) {
    bgmBtn.setAttribute('title', 'Putar musik (Mahalini — Mencintaimu)');
    bgmBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBgm();
    });
  }
}

export function startAmbientBgm() {
  if (isBgmPlaying) return;

  if (bgmAudio) {
    // Gentle volume ramp in
    bgmAudio.volume = 0.05;
    const playPromise = bgmAudio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isBgmPlaying = true;
          updateBgmUi(true);
          fadeInAudio(bgmAudio, 0.4, 2000);
        })
        .catch((err) => {
          console.warn('Audio play prevented or unavailable, fallback to ambient synth drone:', err);
          startSynthAmbientTone();
        });
    }
  } else {
    startSynthAmbientTone();
  }
}

function fadeInAudio(audio, targetVolume = 0.4, durationMs = 2000) {
  const steps = 20;
  const stepTime = durationMs / steps;
  const volIncrement = (targetVolume - audio.volume) / steps;

  let currentStep = 0;
  const interval = setInterval(() => {
    currentStep++;
    audio.volume = Math.min(targetVolume, audio.volume + volIncrement);
    if (currentStep >= steps || audio.volume >= targetVolume) {
      audio.volume = targetVolume;
      clearInterval(interval);
    }
  }, stepTime);
}

export function toggleBgm() {
  if (isBgmPlaying) {
    stopBgm();
  } else {
    startAmbientBgm();
  }
}

export function stopBgm() {
  if (bgmAudio && !bgmAudio.paused) {
    bgmAudio.pause();
  }
  if (synthGain && audioCtx) {
    try {
      synthGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
    } catch (_) {}
  }
  isBgmPlaying = false;
  updateBgmUi(false);
}

function startSynthAmbientTone() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (synthGain) {
      synthGain.gain.cancelScheduledValues(audioCtx.currentTime);
      synthGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      synthGain.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 2);
      isBgmPlaying = true;
      updateBgmUi(true);
      return;
    }

    // Warm cinematic chord (A2 & E3)
    synthOsc1 = audioCtx.createOscillator();
    synthOsc2 = audioCtx.createOscillator();
    synthGain = audioCtx.createGain();

    synthOsc1.type = 'sine';
    synthOsc2.type = 'triangle';

    synthOsc1.frequency.setValueAtTime(110, audioCtx.currentTime);
    synthOsc2.frequency.setValueAtTime(164.81, audioCtx.currentTime);

    synthGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    synthGain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 3);

    synthOsc1.connect(synthGain);
    synthOsc2.connect(synthGain);
    synthGain.connect(audioCtx.destination);

    synthOsc1.start();
    synthOsc2.start();

    isBgmPlaying = true;
    updateBgmUi(true);
  } catch (e) {
    console.warn('Web Audio API not supported', e);
  }
}

function updateBgmUi(playing) {
  const btn = document.getElementById('bgm-btn');
  const icon = document.getElementById('bgm-icon');

  if (btn) {
    if (playing) {
      btn.classList.add('active');
      btn.setAttribute('aria-label', 'Hentikan musik (Mahalini — Mencintaimu)');
      btn.setAttribute('title', 'Sedang memutar: Mahalini — Mencintaimu (Klik untuk jeda)');
      if (icon) icon.innerHTML = '&#9835;';
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-label', 'Putar musik (Mahalini — Mencintaimu)');
      btn.setAttribute('title', 'Putar musik (Mahalini — Mencintaimu)');
      if (icon) icon.innerHTML = '&#9834;';
    }
  }
}

export function playSoundEffect(type = 'click') {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (type === 'unseal') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    }

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch (_) {
    // Audio context error ignore
  }
}
