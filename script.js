// Navbar colouring and accessing
$("#navbar").selectable();

$(".navbar-menu").click(function(event) {

if ($(this).is('a')) {
      event.preventDefault(); 
}
    // event.preventDefault();
$(".navbar-menu").removeClass("selected"); 
 $(this).addClass("selected");  // Add 'selected' class to clicked item
});

// Display the news highlight
$(document).ready(function () {
  let images = $(".news-img");
  images.not(":first").hide();

  let current = 0;

  function startImageTrans() {
    setInterval(fade, 5000);
  }

  function fade() {
    $(images[current]).fadeOut(750, function () {
      current = (current + 1) % images.length;
      $(images[current]).fadeIn(750);
    });
  }

  startImageTrans();
});
