   //Homepage scroll to services.
   document.getElementById('getStartedBtn').addEventListener('click', function (event) {
        event.preventDefault();
        
        // Add a class to create a clicked effect
        this.classList.add('clicked');
        
        // Scroll to the projects section
        document.querySelector('#projects').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Optional: Remove the clicked effect after animation (for demo purposes)
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300); // Adjust timing as needed
    });

    document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
        // Get the email input value
        const emailInput = document.getElementById('email').value;
    
        // Regular expression for validating email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Check if the email is valid
        if (!emailPattern.test(emailInput)) {
            alert('Invalid email address. Please enter a valid email.');
        } else {
            // Show a thank-you notification
            alert('Thank you for subscribing!');
            
            // Optionally, clear the email field after a successful subscription
            document.getElementById('email').value = '';
        }
    });
    