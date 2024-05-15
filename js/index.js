const overlay = document.getElementById("overlay");
let orderId = 1;

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

  const modalTemplate = document.getElementById("modal-template");
  const newModal = modalTemplate.cloneNode(true);
  newModal.id = `modal-${order.id}`;
  newModal.style.display = "none";

  const detailsList = newModal.querySelector(".details-list");
  detailsList.innerHTML = `
    <li>
      <img src="./img/shoes.png" alt="shoes" width="10%" /> Nike - Sport -
      Amount: 5 - Price: $180
    </li>
  `;
  document.body.appendChild(newModal);

  const detailsButton = newRow.querySelector(".order-details-button");
  detailsButton.addEventListener("click", () => {
    const modal = document.getElementById(
      `modal-${detailsButton.dataset.orderId}`
    );
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  const closeButton = newModal.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    newModal.style.display = "none";
    overlay.style.display = "none";
  });
}

overlay.addEventListener("click", () => {
  document.querySelectorAll(".order-details").forEach((modal) => {
    modal.style.display = "none";
  });
  overlay.style.display = "none";
});

// Load orders when the page loads
window.onload = loadOrders;
