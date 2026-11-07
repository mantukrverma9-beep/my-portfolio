const form = document.getElementById("recommendation-form");

const recommendationList = document.getElementById("recommendation-list");

// Popup Function
function showPopup(bool) {
    if (bool) {
        alert("Thank you! Your recommendation has been submitted successfully.");
    }
}

// Add Recommendation Function
function addRecommendation(name, message) {

    const newRecommendation = document.createElement("div");

    newRecommendation.className = "recommendation recommendation-card";

    // Create recommendation message
    const messageElement = document.createElement("p");

    messageElement.textContent = message;

    // Create recommender name
    const nameElement = document.createElement("h4");

    nameElement.textContent = "— " + name;

    // Add message and name
    newRecommendation.appendChild(messageElement);

    newRecommendation.appendChild(nameElement);

    // Add to existing recommendation list
    recommendationList.appendChild(newRecommendation);

    // Show popup after adding recommendation
    showPopup(true);
}

// Form Submit Event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("recommendation-name").value.trim();

    const message = document.getElementById("recommendation-text").value.trim();

    // Validate input
    if (name === "" || message === "") {
        return;
    }

    // Add new recommendation
    addRecommendation(name, message);

    // Reset form
    form.reset();

});