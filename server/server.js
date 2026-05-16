import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

/*
|--------------------------------------------------------------------------
| ROUTES
|--------------------------------------------------------------------------
*/

import authRoutes from "./routes/authRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import workspaceRoutes from "./routes/workspaceRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";

/*
|--------------------------------------------------------------------------
| EXPRESS APP
|--------------------------------------------------------------------------
*/

const app = express();

/*
|--------------------------------------------------------------------------
| MIDDLEWARE
|--------------------------------------------------------------------------
*/

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

/*
|--------------------------------------------------------------------------
| ROOT ROUTE
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.send("FabricAI Pro API Running...");
});

/*
|--------------------------------------------------------------------------
| API ROUTES
|--------------------------------------------------------------------------
*/

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/payment", paymentRoutes);

app.use("/api/users", userRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/workspace", workspaceRoutes);

app.use("/api/webhooks", webhookRoutes);

/*
|--------------------------------------------------------------------------
| DATABASE CONNECTION
|--------------------------------------------------------------------------
*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT =
      process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(
        `FabricAI Server Running On Port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });