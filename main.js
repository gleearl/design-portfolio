// Theme switch: follows the OS until the visitor picks one, then remembers the choice.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var mq = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    return root.dataset.theme ? root.dataset.theme === 'dark' : mq.matches;
  }
  function sync() {
    btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    sync();
  });
  mq.addEventListener('change', sync);
  sync();
})();

// Copy email: click copies the address, label shows "Copied" for a moment.
// Used by the nav button and the Let's talk button on work pages.
(function () {
  var status = document.getElementById('copy-status');

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  document.querySelectorAll('.copy-email').forEach(function (btn) {
    var timer;
    btn.addEventListener('click', function () {
      var email = btn.dataset.email;
      var done = function (ok) {
        status.textContent = ok ? 'Email address copied' : 'Could not copy. Email: ' + email;
        if (!ok) return;
        btn.classList.add('copied');
        clearTimeout(timer);
        timer = setTimeout(function () { btn.classList.remove('copied'); status.textContent = ''; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(fallbackCopy(email)); });
      } else {
        done(fallbackCopy(email));
      }
    });
  });
})();

// Photos fade in as they scroll into view (skipped for reduced motion; without JS they are simply visible).
(function () {
  var tiles = document.querySelectorAll('.tile');
  if (!tiles.length || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  tiles.forEach(function (t) { t.classList.add('reveal'); io.observe(t); });
})();

// Table of contents: highlight the section currently in view.
(function () {
  var links = document.querySelectorAll('.toc a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  function setActive(id) {
    links.forEach(function (a) { a.removeAttribute('aria-current'); });
    if (byId[id]) byId[id].setAttribute('aria-current', 'true');
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-20% 0px -65% 0px' });
  var ids = Object.keys(byId);
  ids.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
  // The last section is short and can never reach the middle of the screen, so it is active once the page bottom is reached.
  function atBottom() { return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4; }
  window.addEventListener('scroll', function () { if (atBottom()) setActive(ids[ids.length - 1]); }, { passive: true });
  // A clicked link is active straight away.
  links.forEach(function (a) { a.addEventListener('click', function () { setActive(a.getAttribute('href').slice(1)); }); });
})();

// Tabs for the notification types on the notifications case study. Without JS every panel shows, one after another.
(function () {
  document.querySelectorAll('[data-nx-tabs]').forEach(function (box) {
    var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!n) return;
        e.preventDefault();
        select(tabs[(i + n + tabs.length) % tabs.length], true);
      });
    });
    box.classList.add('ready');
    select(tabs[0]);
  });
})();
