const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("books", BookSchema);

module.exports = Book;
