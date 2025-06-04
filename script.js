document.addEventListener("DOMContentLoaded", () => {
  // Init AOS animation
  AOS.init({ duration: 1000 });

  // Time-based greeting
  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour >= 5 && hour < 12) greeting.textContent = "Selamat Pagi 🌤️";
  else if (hour >= 12 && hour < 18) greeting.textContent = "Selamat Siang ☀️";
  else greeting.textContent = "Selamat Malam 🌙";

  // Hamburger + Sidebar toggle
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  });

  // Toggle About Us section
  const aboutLink = document.getElementById("about-link");
  const aboutSection = document.getElementById("about");

  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    aboutSection.style.display =
      aboutSection.style.display === "block" ? "none" : "block";
    sidebar.classList.remove("active");
  });

  // WhatsApp redirect from "Beli Sekarang"
  document.querySelectorAll(".buy-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const duration = card.getAttribute("data-duration");
      const price = card.getAttribute("data-price");
      const msg = `min mau sewa bot ${duration} dengan harga ${price}`;
      window.open(
        `https://wa.me/62895326426758?text=${encodeURIComponent(msg)}`
      );
    });
  });

  // Swipe gesture to close sidebar
  let startX = 0;

  sidebar.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  sidebar.addEventListener("touchmove", (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;

    if (diff < -50) {
      sidebar.classList.remove("active");
    }
  });
});