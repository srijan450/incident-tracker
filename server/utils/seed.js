import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Incidents from "../models/incidents.model.js";

const MONGO_URI =
  "mongodb://admin:password@mongodb:27017/incidentdb?authSource=admin";
const severities = ["SEV1", "SEV2", "SEV3", "SEV4"];
const statuses = ["OPEN", "MITIGATED", "RESOLVED"];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected for Seeding");

    // Optional: Clear existing data
    await Incidents.deleteMany({});
    console.log("Old incidents removed");

    const incidents = [];

    for (let i = 0; i < 200; i++) {
      incidents.push({
        title: faker.lorem.sentence(),
        service: faker.company.name(),
        severity: severities[Math.floor(Math.random() * 4)],
        status: statuses[Math.floor(Math.random() * 3)],
        owner: faker.person.fullName(),
        summary: faker.lorem.paragraph(),
      });
    }

    console.log(incidents);

    await Incidents.insertMany(incidents);
    console.log("Successfully seeded 200 incidents");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seedDatabase();
