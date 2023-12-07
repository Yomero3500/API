const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const Tarea = require('../routers/tarea.route');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/tarea", Tarea);

app.get('/', (req, res) => {
  res.json("server initialized");
});

module.exports = app;