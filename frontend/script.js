document
  .getElementById("orderForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const payPerHour = document.getElementById("payPerHour").value;
    const orderId = document.getElementById("orderId").value;
    const numDays = document.getElementById("numDays").value;

    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/complete_order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ payPerHour, orderId, numDays }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("API response:", data);

      // Handle API response here
      alert("Order placed successfully");

      // Clear input fields after successful submission
      document.getElementById("payPerHour").value = "";
      document.getElementById("orderId").value = "";
      document.getElementById("numDays").value = "";

      // Redirect to Accepting Order webpage
      window.location.href = "./CompleteOrder.html"; // corrected the path
    } catch (error) {
      console.error("Somthing went wrong", error);
    }
  });
