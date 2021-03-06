import dotenv from "dotenv";

import "./db";
import app from "./app";

dotenv.config();

import "./model/Video";
import "./model/Comment";
import "./model/User";

const PORT = process.env.PORT || 3000;
// env파일에서 PORT를 찾고 혹시 못 찾을 경우에는 3000번으로 연결

function handleListening() {
  console.log(`🔔 Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
