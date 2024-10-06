// Show/Hide Services List
document.getElementById('show-services-btn').addEventListener('click', function() {
    const serviceList = document.getElementById('services-list');
    if (serviceList.style.display === 'none') {
        serviceList.style.display = 'block';
    } else {
        serviceList.style.display = 'none';
    }
});

// Show/Hide Join Form
document.getElementById('join-btn').addEventListener('click', function() {
    const joinForm = document.getElementById('join-form');
    if (joinForm.style.display === 'none') {
        joinForm.style.display = 'block';
    } else {
        joinForm.style.display = 'none';
    }
});

// Community Members List
const communityList = document.getElementById('community-list');
const members = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis"];
members.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('community-member');
    memberDiv.textContent = member;
    communityList.appendChild(memberDiv);
});


// Redirect to QnA Chatbot on Azure
document.getElementById('partner-btn').addEventListener('click', function() {
    window.open('https://your-azure-chatbot-url.com', '_blank');
});


// Toggle the services dropdown menu
document.getElementById('services-btn').addEventListener('click', function() {
    const menu = document.getElementById('services-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
});
