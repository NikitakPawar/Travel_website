let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
  menu.classList.add('active');
})
closeBtn.addEventListener('click',function(){
  menu.classList.remove('active');
})
// scripts.js
document.addEventListener('DOMContentLoaded', function() {
  const destinationFilter = document.getElementById('destination-filter');
  const sortPrice = document.getElementById('sort-price');
  const offersGrid = document.querySelector('.offers-grid');
  const offerCards = Array.from(document.querySelectorAll('.offer-card'));

  // Filter offers by destination
  destinationFilter.addEventListener('change', function() {
      const selectedDestination = this.value;
      offerCards.forEach(card => {
          const cardDestination = card.getAttribute('data-destination');
          if (selectedDestination === 'all' || selectedDestination === cardDestination) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });

  // Sort offers by price
  sortPrice.addEventListener('change', function() {
      const selectedSort = this.value;
      const sortedCards = offerCards.sort((a, b) => {
          const priceA = parseInt(a.getAttribute('data-price'));
          const priceB = parseInt(b.getAttribute('data-price'));
          return selectedSort === 'low-high' ? priceA - priceB : priceB - priceA;
      });

      // Clear the grid and re-append sorted cards
      offersGrid.innerHTML = '';
      sortedCards.forEach(card => {
          offersGrid.appendChild(card);
      });
  });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
  } else {
      alert('Invalid email or password. Please try again.');
  }
});
