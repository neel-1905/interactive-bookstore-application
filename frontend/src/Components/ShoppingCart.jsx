import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeBook,
  updateTotalAmt,
} from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import cartStyle from "../Styles/cart.module.css";
import { ToastContainer, toast } from "react-toastify";

const ShoppingCart = () => {
  const { products, total } = useSelector((state) => state.cart);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(products);

  useEffect(() => {
    if (!user || !isLoggedIn) {
      alert(`Login to access cart ${isLoggedIn}`);
      navigate("/books");
    }
  }, []);

  useEffect(() => {
    dispatch(updateTotalAmt());
  }, [products, dispatch]);

  const handleRemove = (title) => {
    dispatch(removeBook(title));
    toast("Item Removed!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <h1 className="text-center">Items Cart</h1>

      {total === 0 ? (
        <div className="d-flex justify-content-center align-items-center">
          <h3 className="text-center">Cart is Empty</h3>
        </div>
      ) : (
        <div className="d-flex mt-5 flex-column flex-grow-2 align-items-center vh-100">
          {products.map((item, index) => (
            <div
              key={index}
              className={`card mb-3 ${cartStyle.cardDiv}`}
              style={{ width: "45rem" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.photo}
                    className="img-fluid rounded-start"
                    alt="..."
                    style={{ width: "150px", maxHeight: "200px" }}
                  />
                </div>

                <div className="col-md-4 justify-content-center align-items-center d-flex">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">₹{item.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(item.title)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>

                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <div className="card-body">
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => {
                        if (item.quantity > 1)
                          dispatch(decreaseAmount(item.title));
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => dispatch(increaseAmount(item.title))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="d-flex justify-content-center flex-column align-items-center p-3"
            style={{ width: "45rem" }}
          >
            <h3>Total: ₹{total}</h3>
            <button
              className="btn btn-success p-2 fs-5"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ShoppingCart;
