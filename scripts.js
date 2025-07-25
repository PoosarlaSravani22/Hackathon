// scripts.js

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

document
  .querySelectorAll(".scroll-animate")
  .forEach((el) => observer.observe(el));

// Registration -> Expense Modal flow
const registerForm = document.querySelector("#modal form");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    closeModal("modal");
    openModal("expenseModal");
  });
}
