import './cart.js';
import './insights.js';

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleTheme');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
  }

  toggleBtn?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  renderCart();
  renderCartChart();
});
