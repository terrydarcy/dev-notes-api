// https://medium.com/weekly-webtips/how-to-use-an-express-router-within-the-cloud-function-developing-environment-cb64face4043
// https://node-postgres.com/guides/async-express

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

// Routes
const statusRoute = require("./routes/status");
const notesRoute = require("./routes/notes");

// routings
app.use("/status", statusRoute);


exports.devNotesAPI = functions.https.onRequest(app);