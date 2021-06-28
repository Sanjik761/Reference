const shoesPictures = document.querySelectorAll(".zoom");

shoesPictures.forEach((image) => {
    image.addEventListener("mousemove", (e) => {
        image.style =
            "background-size: 1800px 1200px;" +
            `background-position: ${e.offsetX - 3 * e.offsetX}px ${e.offsetY - 3 * e.offsetY
            }px;`;
    });

    image.addEventListener("mouseout", (e) => {
        image.style = "unset;";
    });
});
