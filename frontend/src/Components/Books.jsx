import React, { Fragment, useEffect, useState } from "react";
import bookStyles from "../Styles/books.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState("All");
  const [search, setSearch] = useState(null);
  const { products, totalProducts } = useSelector((state) => state.cart);

  const genreList = [
    { value: "Fiction", text: "Fiction" },
    { value: "Horror", text: "Horror" },
    { value: "Romance", text: "Romance" },
    { value: "SciFi", text: "SciFi" },
    { value: "Adventure", text: "Adventure" },
  ];

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/books/getAllBooks", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();

      if (result?.isSuccess) {
        setBooks(result?.books);
        console.log(result?.books);
      }
    })();
  }, []);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/books/findByName?title=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await res.json();
      if (!result?.isSuccess) {
        throw new Error(result?.error);
      }
      setBooks(result?.books);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav  ms-auto">
              <form
                className="d-flex me-md-3"
                role="search"
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={(e) => {
                  e.preventDefault();

                  if (!search) {
                    alert("Please enter book title");
                  } else {
                    handleSearch();
                  }
                }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Book"
                  aria-label="Search"
                  required
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>

              <Link
                to={`/cart`}
                className="nav-link bg-primary rounded text-white"
                aria-current="page"
                href="#"
              >
                Cart: {totalProducts}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Genre select */}
      <div className="m-2 d-flex justify-content-end ">
        <select
          class="form-select border border-dark rounded"
          aria-label="Disabled select example"
          style={{ maxWidth: "200px" }}
          value={genre}
          onChange={(e) => {
            // handleGenreChange();
          }}
        >
          <option value="Select Genre" disabled selected>
            Select Genre
          </option>
          <option defaultValue="All">All</option>
          {genreList.map((item, index) => (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center mt-5 ">
        {books.map((item, index) => (
          <BookCard
            key={index}
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=bookcase-books-bookshelves-159711.jpg&fm=jpg"
            title={item.title}
            genre={item.genre}
            price={item.price}
            description={item.description}
            author={item.author}
            stock={item.quantity}
            photo={item.photo}
          />
        ))}
      </div>
    </>
  );
};

export default Books;
