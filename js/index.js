// Function to load orders from localStorage
function loadOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.forEach((order) => {
    addOrderToTable(order);
  });
}

// Function to add order to table
function addOrderToTable(order) {
  const orderTableBody = document.getElementById("order-table-body");

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${order.name}</td>
    <td>${order.address}</td>
    <td>${order.phone}</td>
    <td>${order.orderDate}</td>
    <td>${order.deliveryDate}</td>
    <td>${order.deliveryType}</td>
    <td>$${order.total}</td>
    <td>${order.status}</td>
    <td>
      <button class="order-details-button" data-order-id="${order.id}">View</button>
    </td>
  `;
  orderTableBody.appendChild(newRow);

  const detailsRow = document.createElement("tr");
  detailsRow.classList.add("order-details-row");
  detailsRow.style.display = "none";
  detailsRow.innerHTML = `
    <td colspan="9">
      <ul class="details-list">
        <li>
          <img src="./img/shoes.png" alt="shoes" width="10%" /> Nike - Sport - Amount: 5 - Price: $180
        </li>
      </ul>
    </td>
  `;
  orderTableBody.appendChild(detailsRow);

  const detailsButton = newRow.querySelector(".order-details-button");
  detailsButton.addEventListener("click", () => {
    const isVisible = detailsRow.style.display === "table-row";
    document
      .querySelectorAll(".order-details-row")
      .forEach((row) => (row.style.display = "none"));
    detailsRow.style.display = isVisible ? "none" : "table-row";
  });
}

// Load orders when the page loads
window.onload = loadOrders;
