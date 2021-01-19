function setPopupVisibility(visible) {
  const backdrop = document.querySelector(".backdrop");
  const modal = document.querySelector(".modal");
  const display = visible ? "block" : "none";

  backdrop.style.display = display;
  modal.style.display = display;
}

const buttons = document.querySelectorAll(".plan .button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setPopupVisibility(true);
  });
});

const modalAction = document.querySelector("button.modal__action");

modalAction.addEventListener("click", () => {
  setPopupVisibility(false);
});
