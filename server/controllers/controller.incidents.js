import mongoose from "mongoose";
import Incidents from "../models/incidents.model.js";
import asyncHandler from "../utils/asyncWrapper.js";
import SuccessResponse from "../utils/responses/SuccessResponse.js";
import ErrorResponse from "../utils/responses/ErrorResponse.js";
import PaginatedResponse from "../utils/responses/PaginatedResponse.js";

export const createIncident = asyncHandler(async (req, res) => {
  const incident = await Incidents.create(req.body);
  return new SuccessResponse("incident created successfully", incident).send(
    res,
    201,
  );
});

export const getIncidents = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    severity,
    status,
    search,
    sortBy = "createdAt",
    order = "desc",
  } = req.query;

  const query = {};

  if (severity) query.severity = severity;
  if (status) query.status = status;

  if (search) {
    query.$text = { $search: search };
  }

  const incidents = await Incidents.find(query)
    .sort({ [sortBy]: order === "desc" ? -1 : 1 })
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Incidents.countDocuments(query);

  return new PaginatedResponse("list of incidences", incidents, {
    total,
    page: Number(page),
    limit: Number(limit),
  }).send(res, 200);
});

export const getIncident = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return new ErrorResponse("invalid incidence id", true).send(res, 400);
  }

  const incident = await Incidents.findById(id);

  if (!incident) {
    return new ErrorResponse("incident not found", true).send(res, 404);
  }

  return new SuccessResponse("success", incident).send(res, 200);
});

export const updateIncident = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const incident = await Incidents.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!incident) {
    return new ErrorResponse("incident not found", true).send(res, 404);
  }
  return new SuccessResponse("incident updated successfully", incident).send(
    res,
    200,
  );
});

export const deleteIncident = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const incident = await Incidents.findByIdAndDelete(id);

  if (!incident) {
    return new ErrorResponse("incident not found", true).send(res, 404);
  }

  return new SuccessResponse("incident deleted successfully").send(res, 200);
});
