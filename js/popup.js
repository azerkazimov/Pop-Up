const popUp = document.querySelector(".pop-up");

export function openPopUp() {
  popUp.classList.add("open-pop-up");
}

export function closePopUp() {
  popUp.classList.remove("open-pop-up");
}
