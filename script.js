// Smooth scroll
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });
// Typing animation for hero text
const text = "3rd Year IT Student | Web Developer | Seeking Internship";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = type;
