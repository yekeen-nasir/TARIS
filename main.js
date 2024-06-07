document.getElementById('accidentForm').addEventListener('submit', addRecord);

function addRecord(event) {
    event.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const vehicles = document.getElementById('vehicles').value;
    const injuries = document.getElementById('injuries').value;
    const fatalities = document.getElementById('fatalities').value;
    const description = document.getElementById('description').value;

    // Create an object to store the data with a unique ID
    const record = {
        id: Date.now(),
        date,
        location,
        vehicles,
        injuries,
        fatalities,
        description
    };

    // Retrieve existing records from localStorage
    let records = JSON.parse(localStorage.getItem('accidentRecords')) || [];

    // Add the new record to the array
    records.push(record);

    // Store the updated records array in localStorage
    localStorage.setItem('accidentRecords', JSON.stringify(records));

    // Redirect to the success page
    window.location.href = 'success.html';
}
