import express from "express";
import userRoutes from "./routes/user.route"

const app = express();// "./routes/user.routes";
app.use(express.json());

// Use Routes
app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
