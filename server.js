// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/user-stats', (req, res) => {
  // Simulated live data
  const steps = Math.floor(Math.random() * 10000);
  const calories = Math.floor(Math.random() * 700);
  const sleepHours = (Math.random() * 3 + 5).toFixed(1); // 5–8 hours
  const stressLevel = Math.floor(Math.random() * 10); // 0–9

  res.json({ steps, calories, sleepHours, stressLevel });
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  // Simple AI logic for demo
  let reply = "";
  if (message.toLowerCase().includes("sleep")) {
    reply = "💤 Make sure to sleep 7–8 hours for optimal wellness!";
  } else if (message.toLowerCase().includes("stress")) {
    reply = "🌬 Try 5-min deep breathing and short walk to reduce stress.";
  } else if (message.toLowerCase().includes("steps") || message.toLowerCase().includes("exercise")) {
    reply = "👟 Keep moving! Daily steps help your heart and mood.";
  } else {
    reply = "💚 Keep tracking your wellness. Stay mindful!";
  }

  res.json({ reply });
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));