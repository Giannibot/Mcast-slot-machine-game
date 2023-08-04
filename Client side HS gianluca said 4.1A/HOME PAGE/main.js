$(document).ready(function() {
  $('.navbar-toggler').click(function(e) {
    e.stopPropagation();
    $('#navbarMenu').toggleClass('show');
  });

  $(document).click(function(event) {
    var clickTarget = $(event.target);
    var navbarToggler = $('.navbar-toggler');
    var navbarMenu = $('#navbarMenu');

    if (!clickTarget.closest(navbarToggler).length && !clickTarget.closest(navbarMenu).length && navbarMenu.hasClass('show')) {
      navbarMenu.removeClass('show');
    }
  });

  var currentUrl = window.location.href;

  // Select the navigation links
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  // Loop through each navigation link
  navLinks.forEach(function(link) {
    // Check if the link's href matches the current URL
    if (link.href === currentUrl) {
      // Add the active class to the parent list item
      link.parentNode.classList.add('active');
    } else {
      // Remove the active class from other navigation links
      link.parentNode.classList.remove('active');
    }
  });
});

function signUp() {
  window.location.href = "form.html";
}

function logIn() {
  window.location.href = "login.html";
}

function tryGame() {
  window.location.href = "game.html";
}
