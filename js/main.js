"use strict";

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(ev) {
  if (ev.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

//Widen and stretch image
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
//Show or hide text
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
