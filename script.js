// function showTab (tabId){
//     document.querySelectorAll('.home-center').forEach(div => {
//         selection.style.display = 'none';
//     })
//     document.getElementById(tabId).style.display = 'block';
// }

// Navbar colouring and accessing
$("#navbar").selectable();

$(".navbar-menu").click(function (event) {
  if ($(this).is("a")) {
    event.preventDefault();
  }
  // event.preventDefault();
  $(".navbar-menu").removeClass("selected"); // Remove 'selected' class from all items
  $(this).addClass("selected"); // Add 'selected' class to clicked item
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
