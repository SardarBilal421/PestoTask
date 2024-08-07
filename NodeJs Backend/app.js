const express = require("express");
const taskRouter = require("./Routes/taskRouter");
const appError = require("./Utilties/appError");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1/task", taskRouter);
app.all("*", (req, res, next) => {
  next(
    new appError(`Requested Page : ${req.originalUrl} not on this server`, 404)
  );
});

module.exports = app;
