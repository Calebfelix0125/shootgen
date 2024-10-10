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

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const maxTasks = 3;  // Limit the number of tasks

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if the list already has 5 tasks
    if (list.children.length >= maxTasks) {
      alert('Kamu cuma bisa masukin 3 lists');
      return; // Stop from adding a new task
    }

    const taskText = input.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement('li');
      listItem.style.fontWeight = 'bold';
      
      // Create a text node for the task
      const taskNode = document.createTextNode(taskText);
      
      // Create the delete icon
      const deleteIcon = document.createElement('span');
      deleteIcon.textContent = '\tdelete';  
      deleteIcon.style.fontStyle = 'italic';
      deleteIcon.style.color = '#3a05a4';
      deleteIcon.style.fontSize = 'medium';
      deleteIcon.style.cursor = 'pointer';
      deleteIcon.style.marginLeft = '10px';  
      
      // Add an event listener to the delete icon
      deleteIcon.addEventListener('click', function() {
          list.removeChild(listItem);
      });

      // Append the task text and delete icon to the list item
      listItem.appendChild(taskNode);
      listItem.appendChild(deleteIcon);
      
      // Append the new task to the list
      list.appendChild(listItem);
      
      // Clear the input field
      input.value = "";
    }
  });
});
