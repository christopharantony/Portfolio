(function() {
  function caToggleNav() {
    var nav = document.getElementById('mobile-nav');
    var btn = document.getElementById('nav-ham-btn');
    if (!nav) return;
    var open = nav.classList.toggle('open');
    if (btn) { btn.classList.toggle('open', open); btn.setAttribute('aria-expanded', String(open)); }
    document.body.style.overflow = open ? 'hidden' : '';
  }
  function caCloseNav() {
    var nav = document.getElementById('mobile-nav');
    var btn = document.getElementById('nav-ham-btn');
    if (nav) { nav.classList.remove('open'); }
    if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function(e) {
    if (e.target.closest('#nav-ham-btn')) { caToggleNav(); return; }
    if (e.target.closest('.mobile-nav') && e.target.tagName === 'A') { caCloseNav(); }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') caCloseNav();
  });
})();