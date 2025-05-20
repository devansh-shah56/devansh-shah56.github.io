// theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Initialize based on saved preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      toggleBtn.textContent = '☀️'; // sun icon for light mode
    } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.textContent = '🌙'; // moon icon for dark mode
    }
  });
});
