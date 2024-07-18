function calcAge() {
    // Get the input value
    let dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please enter your D.O.B correctly")
        return;
    }

    // Convert input value to a Date object
    let dobDate = new Date(dob);

    // Get today's date
    let todayDate = document.getElementById('to-date').value;
    let today = new Date(todayDate);

    // Calculate the difference in years, months, and days
    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    // Adjust for negative values
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    console.log(`${years}, ${months}, ${days}`)
    document.getElementById("res-year").innerText = years;
    document.getElementById("res-month").innerText = months;
    document.getElementById("res-day").innerText = days;
}
// Setting the current date 
let today = new Date();
document.getElementById("to-date").value = today.toISOString().substring(0, 10);