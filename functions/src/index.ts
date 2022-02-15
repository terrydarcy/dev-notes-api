const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));

app.get("/", (req: any, res: any) => {
  res.send("Dev Notes Server is live!!");
});

exports.devNotesAPI = functions.https.onRequest(app);