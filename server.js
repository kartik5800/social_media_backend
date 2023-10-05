//

import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
const DB = process.env.DATABASE_LOCAL;

mongoose.set("strictQuery", false);
mongoose.connect(DB).then(() => console.log("database connected"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on Port ${port} ...`);
});
