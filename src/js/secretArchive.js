/**
 * SECRET ARCHIVE ROOM MODAL & PASSWORD LOGIC
 */

import { playSoundEffect } from './audioPlayer.js';

export function initSecretArchive(secretData) {
  const modal = document.getElementById('secret-modal');
  const closeBtn = document.getElementById('secret-close-btn');
  const submitBtn = document.getElementById('secret-submit-btn');
  const passwordInput = document.getElementById('secret-password-input');
  const errorMsg = document.getElementById('secret-error-msg');
  const lockView = document.getElementById('secret-lock-view');
  const revealedView = document.getElementById('secret-revealed-view');
  const revealHeading = document.getElementById('secret-reveal-heading');
  const messageContent = document.getElementById('secret-message-content');

  if (!modal || !secretData) return;

  // Set revealed heading & message text from data
  if (revealHeading) revealHeading.textContent = secretData.revealTitle || "Ini bagian yang sebenarnya paling ingin kusampaikan.";
  if (messageContent && secretData.message) {
    messageContent.innerHTML = secretData.message.map(msg => `<p>${msg}</p>`).join('');
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });

  // Check Password
  function checkPassword() {
    const entered = passwordInput ? passwordInput.value.trim() : '';
    if (entered === secretData.password) {
      playSoundEffect('unseal');
      if (errorMsg) {
        errorMsg.style.color = '#c4a97e';
        errorMsg.textContent = 'AKSES DITERIMA...';
      }

      setTimeout(() => {
        if (lockView) lockView.classList.add('hidden');
        if (revealedView) revealedView.classList.remove('hidden');
      }, 700);
    } else {
      playSoundEffect('click');
      if (errorMsg) {
        errorMsg.style.color = '#a33d4d';
        errorMsg.textContent = 'KODE SALAH • SILAKAN COBA LAGI';
      }
      if (passwordInput) passwordInput.value = '';
    }
  }

  if (submitBtn) submitBtn.addEventListener('click', checkPassword);
  if (passwordInput) {
    passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkPassword();
    });
  }
}
