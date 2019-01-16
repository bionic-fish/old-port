// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the nav Bar
var sticky = navbar.offsetTop;

// Add the stick class to the navbar when you reach its scroll position.
  //  remove sticky when you leave the position

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

function showGallery() {
  var x = document.getElementById('mosGrid');

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showGrid() {
  var x = document.getElementById('gridGallery');

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
