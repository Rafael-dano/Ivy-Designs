document.addEventListener("DOMContentLoaded", () => {
  const headlines = [
    "Custom Web Design!",
    "Small Business?",
    "Firms & Large Business?",
    "Need an E-commerce Site?",
    "Digital Business Card!",
    "App Creation!",
    "SEO Advancement!"
  ];

  let currentIndex = 0;
  const headlineEl = document.getElementById("headline-carousel");

  if (!headlineEl) {
    console.error("Couldn't find #headline-carousel element.");
    return;
  }

  function rotateHeadline() {
    headlineEl.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % headlines.length;
      headlineEl.textContent = headlines[currentIndex];
      headlineEl.style.opacity = 1;
    }, 500); // Matches the fade out time
  }

  setInterval(rotateHeadline, 3000);
});

const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      try {
        const response = await fetch('https://ivy-email-server.onrender.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();

        if (data.success) {
          alert('Message sent successfully!');
          contactForm.reset();
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  }
});


