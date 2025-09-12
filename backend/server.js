import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // Middleware allows to access the request body
app.use(cors());

app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get(/^\/.*$/, (req, res) => {
      res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
    });
}

// Start Server after DB connection
const startServer = async () => {
    try {
      await connectDB();
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.error("Failed to connect to DB", error);
      process.exit(1);
    }
  };
  
  startServer();

