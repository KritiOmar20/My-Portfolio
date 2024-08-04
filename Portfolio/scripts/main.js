
/// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the dark theme by default
function applyDarkTheme() {
  body.classList.add('dark-theme');
  const themeIcon = themeToggle.querySelector('i');
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Apply dark theme by default on page load
document.addEventListener('DOMContentLoaded', () => {
  applyDarkTheme();
});

// Add event listener for theme toggle
if (themeToggle) {
  const themeIcon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
  });
}


// Navbar links active state on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`header nav a[href*=${id}]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
});

//about read more

document.addEventListener("DOMContentLoaded", function() {
  var readMoreBtn = document.getElementById("read-more-btn");
  var readLessBtn = document.getElementById("read-less-btn");
  var moreContent = document.getElementById("more-content");


  // Log the elements to ensure they are correctly selected
  console.log("Read More Button:", readMoreBtn);
  console.log("Read Less Button:", readLessBtn);
  console.log("More Content:", moreContent);

  if (readMoreBtn && readLessBtn && moreContent) {
    readMoreBtn.addEventListener("click", function(event) {
      event.preventDefault();
      moreContent.style.display = "block";
      readMoreBtn.style.display = "none";
      console.log("Read More Button clicked, showing more content.");
    });

    readLessBtn.addEventListener("click", function(event) {
      event.preventDefault();
      moreContent.style.display = "none";
      readMoreBtn.style.display = "block";
      console.log("Read Less Button clicked, hiding more content.");
    });
  } else {
    console.error("One or more elements not found:", { readMoreBtn, readLessBtn, moreContent });
  }
});



  // Log the elements to ensure they are correctly selected
  console.log("Read More Button:", readMoreBtn);
  console.log("Read Less Button:", readLessBtn);
  console.log("More Content:", moreContent);
// >>>>>>> 231fb6981b744a85087c0b48fe5a0ec51f0e7193

  if (readMoreBtn && readLessBtn && moreContent) {
    readMoreBtn.addEventListener("click", function(event) {
      event.preventDefault();
      moreContent.style.display = "block";
      readMoreBtn.style.display = "none";
      console.log("Read More Button clicked, showing more content.");
    });

    readLessBtn.addEventListener("click", function(event) {
      event.preventDefault();
      moreContent.style.display = "none";
      readMoreBtn.style.display = "block";
      console.log("Read Less Button clicked, hiding more content.");
    });
  } else {
    console.error("One or more elements not found:", { readMoreBtn, readLessBtn, moreContent });
  }
});

// Add event listener to the menu icon
document.getElementById('menu-icon').addEventListener('click', () => {
  // Toggle the 'active' class on the navbar element
  document.querySelector('.navbar').classList.toggle('active');
});

// Add event listener to the carousel indicators
const carouselIndicators = document.querySelectorAll('.carousel-indicators li');
carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Set the 'active' class on the current indicator
    indicator.classList.add('active');
    // Remove the 'active' class from the other indicators
    carouselIndicators.forEach((otherIndicator, otherIndex) => {
      if (otherIndex !== index) {
        otherIndicator.classList.remove('active');
      }
    });
    // Set the 'active' class on the corresponding carousel item
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

// Add event listener to the contact form submit button
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the form data
  const formData = new FormData(e.target);
  
  // Convert the FormData object to a plain object
  const data = Object.fromEntries(formData.entries());

  // Send the form data to the server using EmailJS
  emailjs.send('service_5guffxx', 'template_6hcl8g7', data, 'zg0Cl1cRPipXUX-gq')
    .then((response) => {
      console.log('Email sent successfully', response);
      alert('Email sent successfully');
    })
    .catch((error) => {
      console.error('Error sending email', error);
      alert('Error sending email');
    });
});


// Initialize ScrollReveal
ScrollReveal().reveal('.home-content', {
  origin: 'top',
  distance: '50px',
  duration: 1000,
});

ScrollReveal().reveal('.about-content', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
});

ScrollReveal().reveal('.expertise-box', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
});

ScrollReveal().reveal('.project-box', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
});

ScrollReveal().reveal('.contact-form', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
});
