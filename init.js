import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
// env파일에서 PORT를 찾고 혹시 못 찾을 경우에는 3000번으로 연결

function handleListening() {
  console.log(`🔔 Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
