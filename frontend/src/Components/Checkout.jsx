import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { emptyCart } from "../Redux/cartSlice";

const Checkout = () => {
  const { products, total } = useSelector((state) => state.cart);
  console.log(products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length < 1) {
      navigate("/books");
    }
  });

  const handleOrder = () => {
    toast("Order Placed", {
      className: "text-dark bg-light",
      position: "top-right",
      autoClose: 2000,
      style: {
        boxShadow: "0 0 5px 2px black;",
        // border: "0.5px solid black",
        backgroundColor: "grey",
      },
      type: "success",
    });

    setTimeout(() => {
      dispatch(emptyCart());
      navigate("/books");
    }, 2000);
  };

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
        <div
          className="card"
          style={{ minWidth: "50%", boxShadow: "0 0 5px 2px grey" }}
        >
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
            <button onClick={handleOrder} className="btn btn-success">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Checkout;
