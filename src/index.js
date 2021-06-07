const express = require("express");
const routes = require("./routes");

const app = express();

const APP_PORT = process.env.APP_PORT || 5000;
const APP_HOST = process.env.APP_HOST || "0.0.0.0";

//middleware
app.use(express.json());

app.set("port", APP_PORT);
app.set("host", APP_HOST);

app.use("/api", routes);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(`APP RUNNING ON http://${app.get("host")}:${app.get("port")}`);
});
