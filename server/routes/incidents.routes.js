import { Router } from "express";
import {
  createIncident,
  deleteIncident,
  getIncident,
  getIncidents,
  updateIncident,
} from "../controllers/controller.incidents.js";

const incidentsRoute = Router();

incidentsRoute.route("/incidents").get(getIncidents).post(createIncident);

incidentsRoute
  .route("/incidents/:id")
  .get(getIncident)
  .patch(updateIncident)
  .delete(deleteIncident);

export default incidentsRoute;
