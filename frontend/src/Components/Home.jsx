import React from "react";
import Navbar from "./Navbar";
import homeStyles from "../Styles/home.module.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={`p-5 ${homeStyles.mainDiv} position-relative`}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="text-light">Welcome To The Book Store</h1>
          <p className="text-light fs-3">
            We have a big collection of books. <br />
            Choose from over 50000 books from hundreds of different categories.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
