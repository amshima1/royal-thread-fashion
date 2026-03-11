/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    // Feature 1: Dynamic Greeting
    const hour = new Date().getHours();
    const welcomeMsg = hour < 12 ? "Good Morning" : (hour < 18 ? "Good Afternoon" : "Good Evening");
    
    // Feature 2: DOM Manipulation - Adding a timestamp to footer
    const footer = document.querySelector('footer');
    const timeStamp = document.createElement('p');
    timeStamp.innerHTML = `<em>Current Session: ${welcomeMsg} | ${new Date().toLocaleDateString()}</em>`;
    footer.appendChild(timeStamp);

    console.log("Royal Thread DOM fully loaded.");
});

// Feature 3: Appointment Alert Function
function confirmBooking() {
    alert("Thank you! Your fashion consultation request has been received.");
}
