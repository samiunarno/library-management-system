import express from "express";
import cors from "cors";

import router from "./app/routes/routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "My Server is running",
    success: true,
  });
});

export default app;
