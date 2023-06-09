const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/users");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/books", bookRoutes);
app.use("/users", userRoutes);

const connection = async () => {
  await mongoose
    .connect(process.env.MONGO)
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
