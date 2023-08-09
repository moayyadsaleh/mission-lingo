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