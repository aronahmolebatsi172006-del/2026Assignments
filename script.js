console.log("JavaScript is connected!");

// === THEME TOGGLE ===
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('themeBtn');
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Light';
  } else {
    btn.textContent = '🌙 Dark';
  }
}

// Remember theme on page load
window.onload = function() {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = '☀️ Light';
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

let cart = [];

// Add item to cart
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
  openCart();
}

// Open cart modal
function openCart() {
  document.getElementById('cartModal').style.display = 'block';
}

// Close cart modal
function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your order is empty</p>';
    cartTotal.textContent = '0';
    return;
  }

  let total = 0;
  let html = '';

  cart.forEach(item => {
    total += item.price * item.qty;
    html += `
      <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:10px;">
        <div>
          <p style="margin:0;"><strong>${item.name}</strong></p>
          <p style="margin:0; font-size:13px;">Qty: ${item.qty} × P${item.price}.00</p>
        </div>
        <div style="text-align:right;">
          <p style="margin:0;">P${item.price * item.qty}.00</p>
          <button onclick="removeItem('${item.name}')" style="font-size:11px; border:none; background:none; color:red; cursor:pointer;">Remove</button>
        </div>
      </div>`;
  });

  cartItems.innerHTML = html;
  cartTotal.textContent = total;
}

// Remove item
function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

// Clear entire order
function clearCart() {
  if (confirm('Clear your entire order?')) {
    cart = [];
    updateCart();
  }
}

// Confirm order
function confirmOrder() {
  if (cart.length === 0) {
    alert('Your order is empty!');
    return;
  }
  let total = 0;
  cart.forEach(item => total += item.price * item.qty);
  alert('✅ Order confirmed!\n\nTotal: P' + total + '.00\nPlease come to the shop to collect and pay.\n\nThank you for choosing Arona\'s Coffee Shop!');
  cart = [];
  updateCart();
  closeCart();
}

// Filter menu tabs
function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}