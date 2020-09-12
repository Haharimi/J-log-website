import app from "./app";

const PORT = 3000;

function handleListening() {
  console.log(`🔔 Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
