import { Schema, model } from "mongoose";

const incidentSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    severity: {
      type: String,
      enum: ["SEV1", "SEV2", "SEV3", "SEV4"],
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["OPEN", "MITIGATED", "RESOLVED"],
      default: "OPEN",
      index: true,
    },
    owner: {
      type: String,
      default: null,
    },
    summary: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

// Indexing for performance
incidentSchema.index({ createdAt: -1 });
incidentSchema.index({ title: "text", service: "text" });

const Incidents = model("Incident", incidentSchema);

export default Incidents;
