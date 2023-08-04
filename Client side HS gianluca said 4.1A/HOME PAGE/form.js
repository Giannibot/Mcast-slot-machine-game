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
  
  
 
  // Get the current page URL
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


  

function validateForm() {
    // Get the form fields
    var title = document.getElementById("title").value;
    var firstName = document.getElementById("firstName").value;
    var surname = document.getElementById("surname").value;
    var dob = document.getElementById("dob").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var receiveInfo = document.getElementById("receiveInfo").value;
    var address = document.getElementById("address").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var bonusCode = document.getElementById("bonusCode").value;
    var ageVerification = document.getElementById("ageVerification").checked;
  
    // Perform validation
    var isValid = true;
  
    if (title === "") {
      showErrorMessage("Please select a title.", "title");
      isValid = false;
    } else {
      hideErrorMessage("title");
    }
  
    if (firstName === "") {
      showErrorMessage("Please enter your first name.", "firstName");
      isValid = false;
    } else {
      hideErrorMessage("firstName");
    }
  
    if (surname === "") {
      showErrorMessage("Please enter your surname.", "surname");
      isValid = false;
    } else {
      hideErrorMessage("surname");
    }
  
    if (dob === "") {
      showErrorMessage("Please enter your date of birth.", "dob");
      isValid = false;
    } else {
      hideErrorMessage("dob");
    }
  
    if (mobileNumber === "") {
      showErrorMessage("Please enter your mobile number.", "mobileNumber");
      isValid = false;
    } else {
      hideErrorMessage("mobileNumber");
    }
  
    if (address === "") {
      showErrorMessage("Please enter your address.", "address");
      isValid = false;
    } else {
      hideErrorMessage("address");
    }
  
    if (username === "") {
      showErrorMessage("Please enter a username.", "username");
      isValid = false;
    } else {
      hideErrorMessage("username");
    }
  
    if (password === "") {
      showErrorMessage("Please enter a password.", "password");
      isValid = false;
    } else {
      hideErrorMessage("password");
    }
  
    if (!ageVerification) {
      showErrorMessage("You must confirm that you are over 18 years old.", "ageVerification");
      isValid = false;
    } else {
      hideErrorMessage("ageVerification");
    }
  
    // If all fields are valid, display a success message
    if (isValid) {
      var fullName = title + " " + firstName + " " + surname;
      alert("Thank you for signing up, " + fullName + "!");
    }
  }
  
  function showErrorMessage(message, fieldId) {
    var errorField = document.getElementById("errorMessage");
    errorField.innerHTML = message;
  
    var formField = document.getElementById(fieldId);
    formField.classList.add("is-invalid");
  }
  
  function hideErrorMessage(fieldId) {
    var errorField = document.getElementById("errorMessage");
    errorField.innerHTML = "";
  
    var formField = document.getElementById(fieldId);
    formField.classList.remove("is-invalid");
  }
  

function backMain(){
    window.location.href = "main.html";
}


  
