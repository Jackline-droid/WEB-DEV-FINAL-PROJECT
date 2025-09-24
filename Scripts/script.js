// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Reviews Carousel
let reviews = document.querySelectorAll(".review");
let currentIndex = 0;
let interval = setInterval(showNextReview, 5000);

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.remove("active");
    if (i === index) {
      review.classList.add("active");
    }
  });
}

function showNextReview() {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
}

function showPrevReview() {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  showNextReview();
  resetInterval();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  showPrevReview();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextReview, 5000);
}

// Initialize first review
showReview(currentIndex);

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out to Loom & Luxe! We will get back to you soon.');
  contactForm.reset();
});

// Product Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    productCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Default: show "All" as active
document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
