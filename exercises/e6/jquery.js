 // Effects: Fade-In()
 $("#fade-in").click(function() {
    $("#mySquare").fadeIn(1000); // Fade in over 1 second
});

// Events: Click()
$("#mySquare").on("click", function() {
    $(this).fadeOut(500, function() {
      alert("Uh Oh, where did the pumpkin box go?");
    });
});


// Manipulation: Append()
$("#append-text").click(function() {
    $("#mySquare").append("🎃");
});