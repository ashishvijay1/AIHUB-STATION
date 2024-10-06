document.getElementById('pay-now-btn').addEventListener('click', function(e) {
    e.preventDefault();

    let options = {
        "key": "YOUR_RAZORPAY_KEY_ID", // Enter your Razorpay Key ID here
        "amount": 999900, // Amount is in paise (₹9,999 in INR)
        "currency": "INR",
        "name": "AI Hub Station",
        "description": "AI Training Programs Subscription",
        "image": "https://your-logo-url.com/logo.png", // Optional logo URL
        "handler": function(response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // You can add more logic here, like redirecting the user or showing a confirmation message.
        },
        "prefill": {
            "name": "Customer Name", // You can pre-fill customer details if available
            "email": "customer@example.com",
            "contact": "9999999999"
        },
        "theme": {
            "color": "#007BFF"
        }
    };

    let rzp = new Razorpay(options);
    rzp.open();
});
