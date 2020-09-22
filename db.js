import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ connected to DB");
const handleError = (error) =>
  console.log(`🚫 Error on DB connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
