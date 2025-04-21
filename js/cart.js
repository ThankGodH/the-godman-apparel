export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(product) {
  const found = cart.find(item => item.id === product.id);
  if (found) {
    found.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
  renderCart();
}

export function renderCart() {
  const cartContainer = document.getElementById('cartItems');
  if (!cartContainer) return;
  cartContainer.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} x${item.qty}`;
    cartContainer.appendChild(div);
  });
}

window.checkout = function () {
  alert("Order placed successfully!");
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
};
