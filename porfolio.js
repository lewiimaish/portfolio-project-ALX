document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Check if all fields are filled
        if (name && email && message) {
            alert(`Thanks, ${name}! Your message has been sent.`);
            contactForm.reset(); // Reset the form fields
        } else {
            alert('Please fill out all fields.');
        }
    });
});
