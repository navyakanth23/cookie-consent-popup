document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-btn");
  
    const isAccepted = localStorage.getItem("cookieConsent");
  
    if (!isAccepted) {
      setTimeout(() => {
        popup.classList.add("show");
      }, 500);
    }
  
    acceptBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "true");
      popup.classList.remove("show");
  
      setTimeout(() => {
        popup.style.display = "none";
      }, 400);
    });
  });
  