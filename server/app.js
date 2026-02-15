import express from "express";
import cors from "cors";
import "./dotenvImport.js";
import incidentsRoute from "./routes/incidents.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import "./db.js";

const corsOptions = {
  origin: "*",
};
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", incidentsRoute);
app.use(errorHandler);

export default app;
