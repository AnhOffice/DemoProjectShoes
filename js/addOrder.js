const orderForm = document.getElementById("order-form");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(orderForm);
  const newOrder = {
    id: Date.now(),
    name: formData.get("name"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    orderDate: formData.get("order-date"),
    deliveryDate: formData.get("delivery-date"),
    deliveryType: formData.get("delivery-type"),
    total: formData.get("total"),
    status: formData.get("status"),
    quantity: formData.get("quantity"), // Added quantity
  };

  // Retrieve existing orders from localStorage
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // Add new order to the list
  existingOrders.push(newOrder);

  // Save updated orders back to localStorage
  localStorage.setItem("orders", JSON.stringify(existingOrders));

  // Redirect to the order history page
  window.location.href = "index.html";
});
