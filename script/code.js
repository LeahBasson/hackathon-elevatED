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


let wrapper = document.querySelector('[recentOpportunities]')
  
let opportunities = JSON.parse(localStorage.getItem('opportunities'))  

//Ternary operator is used to check if we have data in the local storage
? JSON.parse(localStorage.getItem('opportunities'))  : localStorage.setItem('opportunities', JSON.stringify
   (
       [
           {         
           id: 1,
            opportunityName: "Event Co-ordinator",
            industry: "service-based business",
            companyName:"The Event Place",
            description: "The Events Place specializes in creating personalized, tailor-made events that reflect your unique vision. Established in 2006, we started as a boutique wedding planning service in Cape Town and have since expanded to include corporate functions, private parties, and large-scale events.From intimate gatherings to destination weddings and conferences, we pride ourselves on crafting memorable experiences with attention to detail and creativity. Our goal is to bring your dream event to life, ensuring everything is flawlessly executed so you can enjoy your celebration without stress.",
            time:"4",
            pay:"R300",
            imgIcon:"https://leahbasson.github.io/MyImages/competitionProject/eventIcon.png",
            companyLogo:"https://leahbasson.github.io/MyImages/competitionProject/TheEventPlace.png"
           },
           {
            id: 2,
            opportunityName: "Web Developer",
            industry: "Technology",
            companyName:"Tech Solutions",
            description: "At Tech Solutions, we are dedicated to providing innovative and reliable technology solutions to help businesses thrive in the digital age. Our team of experts specializes in a wide range of services, including software development, IT consulting, and cybersecurity.",
            time:"3",
            pay:"R400",
            imgIcon:"https://leahbasson.github.io/MyImages/competitionProject/webD.png",
            companyLogo:"https://leahbasson.github.io/MyImages/competitionProject/TechSolutions.png"
           },
           {
            id: 3,
            opportunityName: "Modeling",
            industry: "Entertainment",
            companyName:"Exposure",
            description: "At Exposure, we believe in showcasing the beauty and talent of our models to the world. Our mission is to provide a platform where aspiring and professional models can shine and achieve their dreams.",
            time:"2",
            pay:"R200",
            imgIcon:"https://leahbasson.github.io/MyImages/competitionProject/modelIcon.png",
            companyLogo:"https://leahbasson.github.io/MyImages/competitionProject/exposure.png"
           }
       ]
   )
) 


function recentOpportunities(){
    
  try{
      let latestOpportunities = opportunities.reverse().slice(0, 3);
  console.log(latestOpportunities);
  wrapper.innerHTML=''
  latestOpportunities.forEach(opportunities => {
          wrapper.innerHTML += `
          <div class="card">
              <img src="${[opportunities.imgIcon]}" class="card-img-top" alt="${opportunities.opportunityName}">
              <div class="card-body">
                  <h5 class="card-title">${opportunities.opportunityName}</h5>
              </div>
          </div> `
          
      })
  }
      catch (e){
           wrapper.innerHTML += ` <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>`
      }
  
}

recentOpportunities()

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