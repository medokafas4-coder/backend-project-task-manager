const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

app.use("/tasks", taskRoutes);
app.use("/", authRoutes);
app.use("/users", userRoutes);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});