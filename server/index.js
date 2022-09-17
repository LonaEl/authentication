import dotenv from 'dotenv';
import mongoose from 'mongoose'
import express from "express";
const app = express();
import cors from "cors";

dotenv.config();

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const CONNECTION_URL = (process.env.DB);
const PORT = process.env.PORT|| 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is active on port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

