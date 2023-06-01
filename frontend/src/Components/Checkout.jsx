import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { products, total } = useSelector((state) => state.cart);
  console.log(products);

  return (
    <>
      {/* <div>
        {products.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div> */}

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100dvh" }}
      >
        <div className="card" style={{ minWidth: "50%" }}>
          <div className="card-header fw-bold">Order Summary</div>
          <div className="card-body">
            {products.map((item, index) => (
              <div className="d-flex justify-content-between">
                <p key={index}>{item.title}</p>
                <p className="fw-bold">x {item.quantity}</p>
              </div>
            ))}
            <div className="d-flex justify-content-between">
              <p>
                <b>Total</b>
              </p>
              <p>
                <b>₹{total}</b>
              </p>
            </div>
            <a className="btn btn-success">Place Order</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
