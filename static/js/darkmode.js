const dtoggleBtn = document.getElementById('darkToggle');
const THEME_KEY = 'site-theme';

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    dtoggleBtn.setAttribute('aria-pressed', 'true');
    dtoggleBtn.title = '라이트 모드로 전환';
  } else {
    document.documentElement.removeAttribute('data-theme');
    dtoggleBtn.setAttribute('aria-pressed', 'false');
    dtoggleBtn.title = '다크 모드로 전환';
  }
  localStorage.setItem(THEME_KEY, theme);
}

dtoggleBtn.addEventListener('click', () => {
  const current = localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
})();
