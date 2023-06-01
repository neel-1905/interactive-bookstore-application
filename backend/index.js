const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/books", bookRoutes);

const connection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://neel1905:neel1905@cluster0.2mdg4wr.mongodb.net/bookstore?retryWrites=true&w=majority"
    )
    .then(console.log("Connected to database"))
    .catch((err) => console.log(err));
};

mongoose.connection.on("connected", () => {
  console.log("mongoDb connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb has disconnected");
});

app.listen(port, () => {
  connection();
  console.log(`App started on ${port}`);
});
