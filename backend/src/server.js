const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const setupDonutsApi = require("./donuts-api");
const app = express();

const slowEnabled = process.env.USE_SLOW === "true";

app.use(bodyParser.json());

app.use((_, res, next) => {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS,GET,PUT,POST,PATCH,DELETE"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use((req, _res, next) => {
  if (req.query.slow !== undefined || slowEnabled) {
    const raw = typeof req.query.slow === "string" ? req.query.slow : "";
    let baseTimeout;

    if (raw && raw[0].toLowerCase() === "r") {
      // randomize around the provided base (e.g., r2000)
      const parsed = parseInt(raw.slice(1), 10);
      baseTimeout = Number.isFinite(parsed) ? parsed : 1200;
      const jitter = Math.round(baseTimeout * 0.5);
      const min = Math.max(0, baseTimeout - jitter);
      const max = baseTimeout + jitter;
      const timeout = Math.floor(Math.random() * (max - min + 1)) + min;

      console.log(`Slow down ~${baseTimeout}ms (randomized -> ${timeout}ms)`);
      setTimeout(next, timeout);
      return;
    }

    const parsed = parseInt(raw, 10);
    const timeout = Number.isFinite(parsed) ? parsed : 1200;
    console.log(`Slow down ${timeout}ms`);
    setTimeout(next, timeout);
  } else {
    next();
  }
});

setupDonutsApi(app);


const port = process.env.SERVER_PORT || 7200;

app.listen(port, () => {
  console.log(`
    📞    Donut API Server listening on port ${port}
    👉    Try GET http://localhost:${port}/api/donuts
    👉    Try GET http://localhost:${port}/api/donuts?orderBy=likes
    👉    Try GET http://localhost:${port}/api/donuts?orderBy=name
    👉    Try GET http://localhost:${port}/api/donuts/1
    👉    Try GET http://localhost:${port}/api/donuts/1/comments
    👉    Try PUT http://localhost:${port}/api/donuts/1/likes
`);
});
