// Form submission event listener
document.getElementById('join-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate email sending with CloudHQ (you would configure the real service separately)
    sendEmail();

    // Display success message
    document.getElementById('join-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
});

// Function to automatically complete email domains
function autoCompleteEmail() {
    const emailInput = document.getElementById('email');
    if (emailInput.value.includes('@')) {
        // If '@' is typed, leave it as the user types
        return;
    } else {
        // If not, suggest common domains (you can add more domains as needed)
        const suggestion = emailInput.value + '@gmail.com';
        emailInput.value = suggestion;
    }
}

// Function to simulate sending an email (This can be integrated with CloudHQ or other email APIs)
function sendEmail() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Here you would use CloudHQ API or another service to send a confirmation email
    // This is a simulated email process for demonstration purposes
    console.log('Sending email to:', email);
    console.log('Email Content:');
    console.log(`Hi ${name},\nThank you for joining our AI Hub Community! We'll be in touch soon.`);
}

// Handle Request Call Back Button
document.getElementById('request-call-back-btn').addEventListener('click', function() {
    alert('Our team will call you back shortly.');
});
