// src/pages/OrderHistory.js
import React from "react";

const OrderHistory = () => {
  const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

  return (
    <div className="container my-5">
      <h1 className="text-center">Order History</h1>
      <hr />
      {orderHistory.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          No orders placed yet.
        </div>
      ) : (
        <ul className="list-group">
          {orderHistory.map((order, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>Order #{index + 1}</strong> - {order.date}
                  <div>Total: <strong>${order.totalAmount.toFixed(2)}</strong></div>
                  <div>Items: {order.items.map(item => item.name).join(", ")}</div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => viewOrderDetails(order)}>
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const viewOrderDetails = (order) => {
  alert(JSON.stringify(order, null, 2)); // Replace with your order details modal or navigation
};

export default OrderHistory;
