import dotenv from "dotenv";
dotenv.config();
import express from "express";
import roleRoutes from "./routes/role.routes";
import permissionRoutes from "./routes/permission.routes";
import { connectDB } from "./config/db";

const app = express();

app.use(express.json());

//connect DB
connectDB();

//routes
app.use("/role", roleRoutes);
app.use("/permission", permissionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});