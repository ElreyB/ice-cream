$(document).ready(function() {
  $("#show").click(function() {
    var flavors = ["Bubble Gum", "Mint Chocolate Chip", "Coffee Oreo", "Half Baked", "Strawberry Shortcake"];

    flavors.forEach(function(flavor) {
      $(".flavors").append("<li>" + flavor + "</li>");
    });
  });
});
