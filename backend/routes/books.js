const express = require("express");
const {
  addBook,
  getAllBooks,
  findByName,
  findByGenre,
} = require("../controllers/books");
const router = express.Router();

router.post("/addBook", addBook);
router.get("/getAllBooks", getAllBooks);
router.get("/findByName", findByName);
router.get("/findByGenre", findByGenre);

module.exports = router;
