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
var symbols = [ 'lemon', 'orange', 'bar', 'cherry'];

function getRandomSymbol() {
  var randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

function spin() {
  var slot1 = document.getElementById('slot1');
  var slot2 = document.getElementById('slot2');
  var slot3 = document.getElementById('slot3');
  var resultDiv = document.getElementById('result');

  var symbol1 = getRandomSymbol();
  var symbol2 = getRandomSymbol();
  var symbol3 = getRandomSymbol();

  // Display random images for 2 seconds
  var interval = setInterval(function() {
    symbol1 = getRandomSymbol();
    symbol2 = getRandomSymbol();
    symbol3 = getRandomSymbol();
    slot1.src = 'Game/images/' + symbol1 + '.jpg';
    slot2.src = 'Game/images/' + symbol2 + '.jpg';
    slot3.src = 'Game/images/' + symbol3 + '.jpg';
  }, 100);

  // Stop displaying random images after 2 seconds and show the final result
  setTimeout(function() {
    clearInterval(interval);
    slot1.src = 'Game/images/' + symbol1 + '.jpg';
    slot2.src = 'Game/images/' + symbol2 + '.jpg';
    slot3.src = 'Game/images/' + symbol3 + '.jpg';

    if (symbol1 === symbol2 && symbol2 === symbol3) {
      resultDiv.innerText = 'Congratulations! You won!';
    } else {
      resultDiv.innerText = 'Sorry, try again.';
    }
  }, 2000);
}


function backMain(){
  window.location.href = "main.html";
}