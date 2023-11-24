$(function () {
    // Function to randomize position
    function randomizePosition(element) {
      const xPos = Math.floor(Math.random() * ($(window).width() - element.width()));
      const yPos = Math.floor(Math.random() * ($(window).height() - element.height()));
      element.css({ top: yPos, left: xPos });
    }

    // Variable to select draggable image
    let draggableImage = $(".draggable");

    // Making the image draggable and resizable
    draggableImage.resizable().parent().draggable();

    // Randomize position on page load
    draggableImage.each(function () {
      randomizePosition($(this));
    });
  });

