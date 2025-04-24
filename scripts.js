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


document.getElementById("copyEmail").addEventListener("click", function () {
  navigator.clipboard.writeText("rafaelagredano99@gmail.com");
  alert("Email copied to clipboard!");
});



