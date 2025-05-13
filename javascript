const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.toggle('dark-theme', savedTheme === 'dark');
