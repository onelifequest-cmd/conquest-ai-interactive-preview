// Lead form, PREVIEW BUILD: validates locally and shows a "not sent" note. There is no network call in this file.
(() => {
  const f = document.getElementById('lead-form'); if (!f) return;
  const msg = document.getElementById('lead-msg');
  f.addEventListener('submit', e => {
    e.preventDefault();
    if (!f.checkValidity()) { f.reportValidity(); return; }
    msg.textContent = 'Preview only: your details were not sent anywhere.';
  });
})();
