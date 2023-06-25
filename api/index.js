const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const mongoose = require("mongoose");

dotenv.config();

const cors = require('cors');
app.use(cors());

mongoose.set("strictQuery", false);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is connect");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
