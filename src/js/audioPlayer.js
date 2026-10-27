/**
 * AUDIO ENGINE & BGM CONTROLLER
 * Supports Web Audio API ambient synth drone fallback & sound memory playback.
 */

let audioCtx = null;
let bgmAudio = null;
let isBgmPlaying = false;
let synthOsc1 = null;
let synthOsc2 = null;
let synthGain = null;

export function initAudioSystem(bgmTrackUrl) {
  const floatBgmBtn = document.getElementById('bgm-floating-btn');

  if (bgmTrackUrl) {
    bgmAudio = new Audio(bgmTrackUrl);
    bgmAudio.loop = true;
    bgmAudio.volume = 0.35;
  }

  if (floatBgmBtn) {
    floatBgmBtn.addEventListener('click', () => {
      toggleBgm();
    });
  }
}

export function startAmbientBgm() {
  if (isBgmPlaying) return;

  if (bgmAudio) {
    bgmAudio.play().then(() => {
      isBgmPlaying = true;
      updateBgmUi(true);
    }).catch(err => {
      console.log('Audio autoplay prevented, fallback to synth on user click', err);
      startSynthAmbientTone();
    });
  } else {
    startSynthAmbientTone();
  }
}

function toggleBgm() {
  if (isBgmPlaying) {
    stopBgm();
  } else {
    startAmbientBgm();
  }
}

function stopBgm() {
  if (bgmAudio) {
    bgmAudio.pause();
  }
  if (synthGain && audioCtx) {
    synthGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
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

    // Create dual ambient drone oscillators for warm cinematic atmosphere
    synthOsc1 = audioCtx.createOscillator();
    synthOsc2 = audioCtx.createOscillator();
    synthGain = audioCtx.createGain();

    synthOsc1.type = 'sine';
    synthOsc2.type = 'triangle';

    synthOsc1.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 note
    synthOsc2.frequency.setValueAtTime(164.81, audioCtx.currentTime); // E3 chord note

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
  const btn = document.getElementById('bgm-floating-btn');
  if (btn) {
    if (playing) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
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
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    }

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  } catch(e) {
    // Ignore audio error
  }
}
