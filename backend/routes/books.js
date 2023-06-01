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
router.get("/getAllBooks", verify, getAllBooks);
router.get("/findByName", verify, findByName);
router.get("/findByGenre", verify, findByGenre);

module.exports = router;
