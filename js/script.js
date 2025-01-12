//toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .experiences-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Data Engineer', 'Data Enthusiast', 'ETL Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Function to send a WhatsApp message
function sendWhatsAppMessage() {
    // Get the name, email, and message from the input fields
    var name = document.getElementById('user-name').value;
    var email = document.getElementById('user-email').value;
    var message = document.getElementById('whatsapp-message').value;

     // Validate the inputs
  if (!name || !email || !message) {
    alert("Please fill in all the required information (Name, Email and Message)");
    return; // Stop the function if validation fails
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert("Please enter a valid email address");
    return; // Stop the function if email is invalid
  }
  
    // Combine name, email, and message into one final message
    var finalMessage = `My Name is ${name} (${email}) \nMessage: ${message}`;
  
    // URL encode the final message to handle spaces and special characters
    var encodedMessage = encodeURIComponent(finalMessage);
  
    // Define the phone number and the WhatsApp URL 
    var phoneNumber = '+6285888695806'; 
    var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // Open the WhatsApp link in a new tab or window
    window.open(whatsappUrl, '_blank');
  }
  
  // Add event listener to the send button
  document.getElementById('send-button').addEventListener('click', sendWhatsAppMessage);

// Get current year
const currentYear = new Date().getFullYear();
// Insert with element id 'current_year'
document.getElementById('current_year').textContent = currentYear;