// Initialize variables
let userName = '';
let users = JSON.parse(localStorage.getItem('users')) || {};

// Get DOM elements
const actionButton = document.getElementById('actionButton');
const timerDisplay = document.getElementById('timerDisplay');
const userTable = document.getElementById('userTable');

// Load existing data into the table on page load
updateUserTable();

// Handle button click
actionButton.addEventListener('click', () => {
    if (!userName) {
        userName = prompt('Please enter your name:');
        if (userName) {
            actionButton.textContent = 'Start';
        }
    } else {
        // Increment click count for the user
        if (!users[userName]) {
            users[userName] = 0;
        }
        users[userName]++;
        saveData();
        startTimer();
        updateUserTable();
    }
});

// Start a 5-second timer
function startTimer() {
    actionButton.disabled = true;
    let timeLeft = 5;
    timerDisplay.textContent = `Timer: ${timeLeft} seconds`;
    const interval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Timer: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = '';
            actionButton.disabled = false;
        }
    }, 1000);
}

// Update the table with user data
function updateUserTable() {
    userTable.innerHTML = '';
    for (const user in users) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const countCell = document.createElement('td');
        nameCell.textContent = user;
        countCell.textContent = users[user];
        row.appendChild(nameCell);
        row.appendChild(countCell);
        userTable.appendChild(row);
    }
}

// Save user data to LocalStorage
function saveData() {
    localStorage.setItem('users', JSON.stringify(users));
}
