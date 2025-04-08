document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-btn");

  const isAccepted = localStorage.getItem("cookieConsent");

  if (!isAccepted) {
    // Show popup with animation
    setTimeout(() => {
      popup.classList.add("show");
    }, 500); // slight delay for smooth entrance
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "true");
    // Animate out
    popup.classList.remove("show");

    // Optional: wait for animation to complete before hiding
    setTimeout(() => {
      popup.style.display = "none";
    }, 400);
  });
});
