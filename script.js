function bookRoom() {
    const room = document.getElementById('room').value;
    const date = document.getElementById('date').value;
    
    if (!date) {
        alert('Please select a date.');
        return;
    }

    // Send data to PHP server
    fetch('bookRoom.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `room=${room}&date=${date}`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Display the PHP response
        location.reload();  // Reload the page to update the list
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
