import { cart } from './cart.js';

export function renderCartChart() {
  const ctx = document.getElementById('cartChart')?.getContext('2d');
  if (!ctx) return;
  const labels = cart.map(item => item.name);
  const quantities = cart.map(item => item.qty);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Items in Cart',
        data: quantities,
        backgroundColor: 'gold'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}
