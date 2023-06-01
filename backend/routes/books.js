const express = require("express");
const {
  addBook,
  getAllBooks,
  findByName,
  findByGenre,
} = require("../controllers/books");
const verify = require("../middleware/verify");
const router = express.Router();

router.post("/addBook", verify, addBook);
router.get("/getAllBooks", getAllBooks);
router.get("/findByName", findByName);
router.get("/findByGenre", findByGenre);

module.exports = router;
