// // frontend/acceptingOrderScript.js
// // Assuming you have a global variable `orderDetails` containing the order information

document.getElementById("orderDetails").innerHTML = `
    <h2>Order Details</h2>
    <p><strong>Title:</strong> ${orderDetails.title}</p>
    <p><strong>Description:</strong> ${orderDetails.description}</p>
    <!-- Add more order details as needed -->
`;

document
  .getElementById("acceptOrder")
  .addEventListener("click", async function () {
    // Implement accept order functionality
    alert("Order accepted!");
  });

document
  .getElementById("completeOrder")
  .addEventListener("click", async function () {
    // Implement complete order functionality
    alert("Order completed!");
  });
// frontend/acceptingOrderScript.js
// Assuming you have a global variable `orderDetails` containing the order information
document
  .getElementById("completeOrder")
  .addEventListener("click", async function () {
    try {
      // Make an API call to complete the order and transfer funds
      const response = await fetch("/api/orders/complete_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: orderDetails.orderId,
          amount: orderDetails.payPerHour * orderDetails.numDays, // Calculate the total amount
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Tokens Credited to Freelancer Account");
      } else {
        alert("Failed to complete order. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
