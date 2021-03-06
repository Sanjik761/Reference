const carZoom = document.querySelectorAll(".zoom");

carZoom.forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    image.style =
      "background-size: 2000px 1400px;" +
      `background-position: ${e.offsetX - 3 * e.offsetX}px ${e.offsetY - 3 * e.offsetY
      }px;`;
  })

  image.addEventListener("mouseout", (e) => {
    image.style = "unset;";
  });
});
