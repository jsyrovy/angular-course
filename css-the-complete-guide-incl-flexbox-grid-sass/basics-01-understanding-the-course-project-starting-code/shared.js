const buttons = document.querySelectorAll(".plan .button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalAction = document.querySelector("button.modal__action");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    backdrop.classList.add("open");
    modal.classList.add("open");
  });
});

modalAction?.addEventListener("click", () => {
  backdrop.classList.remove("open");
  modal.classList.remove("open");
});

toggleButton.addEventListener("click", () => {
  backdrop.classList.add("open");
  mobileNav.classList.add("open");
});

backdrop.addEventListener("click", () => {
  backdrop.classList.remove("open");
  mobileNav.classList.remove("open");
  modal?.classList.remove("open");   
});
