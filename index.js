require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

var corsOptions = {
    origin: "http://localhost:3001"
  };

app.use(cors(corsOptions));

app.use(
    cookieSession({
      name: "Kisame-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true
    })
);


app.use(express.json());
app.use('/api', routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});