const Book = require("../models/book");

const addBook = async (req, res) => {
  try {
    const { title, author, description, price, genre, photo } = req.body;

    const bookExists = await Book.findOne({ title });

    if (bookExists) {
      return res.status(409).json({ message: "Book already exists" });
    }

    if (!title || !author || !description || !price || !genre || !photo) {
      return res.status(404).json({ message: "Please fill all details" });
    }

    const newBook = new Book({
      title,
      author,
      description,
      price,
      genre,
      photo,
    });

    await newBook.save();

    return res.status(202).json({ message: "Book added" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (!books.length) {
      return res
        .status(404)
        .json({ message: "No books found", isSuccess: false });
    }

    return res
      .status(200)
      .json({ message: "Books found", isSuccess: true, books });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findByName = async (req, res) => {
  try {
    const { title } = req.query;

    const books = await Book.find({
      title: { $regex: new RegExp(title, "i") },
    });

    if (!books) {
      return res
        .status(404)
        .json({ message: "No books found", isSuccess: false });
    }

    return res
      .status(200)
      .json({ message: "Books found", isSuccess: true, books });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const findByGenre = async (req, res) => {
  try {
    const { genre } = req.query;
    let books = [];

    if (genre === "All") {
      books = await Book.find();
    } else {
      books = await Book.find({ genre });
    }

    if (books.length < 1) {
      return res
        .status(404)
        .json({ message: "No books found", isSuccess: false });
    }

    return res
      .status(200)
      .json({ message: "Books found", isSuccess: true, books });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { addBook, getAllBooks, findByName, findByGenre };
