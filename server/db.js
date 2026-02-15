import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("connected to db!");
  })
  .catch((err) => {
    console.error("cannot connect to db", err.message);
    console.error(err);
    process.exit(1);
  });
