$(function () {
  $("#toggleButton").on("click", function () {
    $("#myParagraph").slideToggle();
  });

  $("#colorButton").on("click", function () {
    $("#colorDiv").css("background-color", "yellow");
  });

  $("#addClassButton").on("click", function () {
    $("#classDiv").addClass("new-class");
  });

  $("#removeClassButton").on("click", function () {
    $("#classDiv").removeClass("new-class");
  });

  $("#fadeInButton").on("click", function () {
    $("#fadeDiv").fadeIn();
  });

  $("#fadeOutButton").on("click", function () {
    $("#fadeDiv").fadeOut();
  });

  $("#slideUpButton").on("click", function () {
    $("#slideDiv").slideUp();
  });

  $("#slideDownButton").on("click", function () {
    $("#slideDiv").slideDown();
  });
});
