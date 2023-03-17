const containers = document.querySelectorAll(".container");
const draggables = document.querySelectorAll(".drag");
const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (e) => {
    draggable.classList.add("opacity-50");
  });
  draggable.addEventListener("dragend", (e) => {
    draggable.classList.remove("opacity-50");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    container.appendChild(document.querySelector(".opacity-50"));
  });
});
