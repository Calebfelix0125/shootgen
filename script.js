// Navbar colouring and accessing
$("#navbar").selectable();

$(".navbar-menu").click(function(event) {

if ($(this).is('a')) {
      event.preventDefault(); 
}
    
$(".navbar-menu").removeClass("selected"); 
 $(this).addClass("selected");
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


document.addEventListener("DOMContentLoaded", function() {
  function form(element) {
     
      element.style.display = 'none';

      const viewList = document.querySelector('.view-list-to-do-list');

      viewList.style.display = 'none';

      const formContainer = document.querySelector('.home-upper-right');
      
      formContainer.innerHTML += `
        <input type="text" id="task" name="task" required placeholder="Enter new task">
        <button type="submit">Submit</button>
        <a href='dashboard.html'><button>Back</button></a>
          `;
  }

  $('.add-new-to-do-list').on('click', function(event) {
    form(this);
});
});

