// Function to toggle the popup visibility
function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}
// JavaScript for hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
