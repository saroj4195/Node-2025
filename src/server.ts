import express from "express";
import userRoutes from "./routes/user.route"
import { connectDB } from "./config/db";

const app = express();
app.use(express.json());

connectDB();  // connect to MongoDB

app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
