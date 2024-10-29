import express from "express";
import router from "./routes/example";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const isDevelopment = process.env.NODE_ENV === "development";

app.use("/example/", router);

if (isDevelopment) {
  app.listen(PORT, () => {
    console.log(
      `Server is running on http://localhost:${PORT} - ${process.env.NODE_ENV}`
    );
  });
}

module.exports = app;
