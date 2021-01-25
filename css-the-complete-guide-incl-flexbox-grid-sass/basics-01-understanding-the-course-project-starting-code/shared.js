const buttons = document.querySelectorAll(".plan .button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalAction = document.querySelector("button.modal__action");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  });
});

modalAction?.addEventListener("click", () => {
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
});

toggleButton.addEventListener("click", () => {
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
  mobileNav.classList.add("open");
});

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  modal?.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
});
