document.addEventListener("DOMContentLoaded", function() {
  const zoomInButton = document.getElementById("zoom-in");
  const zoomOutButton = document.getElementById("zoom-out");
  const zoomableElements = document.querySelectorAll(".zoomable");

  let currentFontSize = parseFloat(window.getComputedStyle(zoomableElements[0]).fontSize);

  zoomInButton.addEventListener("click", function() {
    currentFontSize += 1;
    zoomableElements.forEach(element => {
      element.style.fontSize = currentFontSize + "px";
    });
  });

  zoomOutButton.addEventListener("click", function() {
    currentFontSize -= 1;
    zoomableElements.forEach(element => {
      element.style.fontSize = currentFontSize + "px";
    });
  });
});

const draggable = document.getElementById("draggable");

let isDragging = false;
let initialX, initialY;
let offsetX, offsetY;

draggable.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  initialX = touch.clientX;
  initialY = touch.clientY;
  offsetX = initialX - draggable.getBoundingClientRect().left;
  offsetY = initialY - draggable.getBoundingClientRect().top;
  draggable.style.cursor = "grabbing";
});

document.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const touch = e.touches[0];

  // Calculate new position
  const newX = touch.clientX - offsetX;
  const newY = touch.clientY - offsetY;

  // Update element's position
  draggable.style.left = newX + "px";
  draggable.style.top = newY + "px";
});

document.addEventListener("touchend", () => {
  isDragging = false;
  draggable.style.cursor = "grab";
});