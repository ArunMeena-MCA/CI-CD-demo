const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "CI/CD Demo Running 🚀" });
});

module.exports = app;