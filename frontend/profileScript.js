document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("profileForm");
  const button = document.getElementById("button");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      areaOfExpertise: document.getElementById("areaOfExpertise").value,
      yearsOfExperience: document.getElementById("yearsOfExperience").value,
    };

    // Send the data to the API using fetch
    fetch("http://localhost:8000/api/v1/profile/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle API response here
        alert("Profile created successfully!"); // Show alert
        window.location.href = "./acceptingOrder.html";
        // alert("Profile create successfully");
        (document.getElementById("firstName").value = ""),
          (document.getElementById("lastName").value = ""),
          (document.getElementById("areaOfExpertise").value = ""),
          (document.getElementById("yearsOfExperience").value = ""),
          console.log("API response:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
});
