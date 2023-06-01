import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import bookcardStyle from "../Styles/bookcard.module.css";
import { ToastContainer, toast } from "react-toastify";
// import './nodereact-toastify/dist/ReactToastify.css';
import "../../node_modules/react-toastify/dist/ReactToastify.css";

const BookCard = (props) => {
  const dispatch = useDispatch();

  const handleAdd = (book) => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      dispatch(addToCart(book));
      toast("Added to cart", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      alert("Please login first");
    }
  };

  return (
    <>
      <div
        className={`card ${bookcardStyle.cardDiv}`}
        key={props.index}
        style={{ width: "15rem" }}
      >
        <img
          src={props.photo}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "30vh", overflow: "hidden" }}
        />
        <div className="card-body">
          <h5 className={`card-title ${bookcardStyle.title}`}>{props.title}</h5>
          <h6 className="card-subtitle text-secondary">{props.genre}</h6>
          {/* <p className={`card-text ${bookStyles.description}`}>
                {item.description}
              </p> */}
          <p className={`card-text ${bookcardStyle.author}`}>
            A Book by {props.author}
          </p>
          <div className="d-flex justify-content-between">
            <p className="card-text mt-2 mb-1">
              <b>₹{props.price}</b>
            </p>
            {/* <p className="card-text mt-2 mb-1">In Stock: {props.stock}</p> */}
          </div>
          <button onClick={() => handleAdd(props)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default BookCard;
