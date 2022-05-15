require ('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./database/database");
const routes = require("./routes");

db;

app.use(express.json());
app.use(cors());
app.use('/', routes);



app.listen(process.env.PORT, () => {
  console.log(`API is running...`);
});

