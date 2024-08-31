const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } 
    else if(window.scrollY < 56){
        navEl.classList.remove('navbar-scrolled');
    }
})

 // Function to validate footer form field
 function validateFooterForm() {
    let footerForm = document.forms["footerForm"];
    let footerEmail = footerForm["footerEmail"].value;
  
    if (footerEmail === "") {
        document.getElementById("footer_error").innerHTML = "Please enter your email address";
        return false; // Prevent form submission
      } 
      else {
        document.getElementById("footer_error").innerHTML = ""; 
        }

        return true; // Allow form submission if validation passes
}

  // Get the footer form element
  let footerForm = document.forms["footerForm"];

  // Attach the event listener to the footer form's submit event
  footerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateFooterForm()) {
      event.target.submit();
    }
  });