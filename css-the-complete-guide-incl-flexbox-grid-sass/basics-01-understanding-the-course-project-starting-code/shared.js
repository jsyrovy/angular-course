const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".plan .button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
});
