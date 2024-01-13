let loggedInUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'demo' && password === 'password') {
        loggedInUser = username;
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function register() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regUsername === 'demo') {
        alert('Username already taken. Please choose another.');
    } else {
        loggedInUser = regUsername;
        window.location.href = 'dashboard.html'; 
    }
}

function bookSlot() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const event = document.getElementById('event').value;

    const bookingList = document.getElementById('bookingList');
    const listItem = document.createElement('li');
    listItem.textContent = `${date} at ${time}: ${event}`;
    bookingList.appendChild(listItem);
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    var hallId = document.getElementById('hall-select').value;
    var date = document.getElementById('date-input').value;

    // Call the bookHall function to handle the booking request
    bookHall(hallId, date);
    
    // Additional logic from the second snippet
    var hallSelect = document.getElementById('hall-select');
    var selectedHall = hallSelect.options[hallSelect.selectedIndex].text;
    var dateInput = document.getElementById('date-input');
    var selectedDate = dateInput.value;

    if (selectedHall && selectedDate) {
        var bookingStatus = document.getElementById('booking-status');
        bookingStatus.querySelector('h2').textContent = 'Hall reserved for ' + selectedHall + ' on ' + selectedDate + '.';
    }
});
