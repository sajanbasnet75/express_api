const express = require("express");
const routes = require("./routes");

const app = express();

const DB_PORT = process.env.DB_PORT || 5000;
const DB_HOST = process.env.DB_HOST || "0.0.0.0";

//middleware
app.use(express.json());

app.set("port", DB_PORT);
app.set("host", DB_HOST);

app.use("/api", routes);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(`APP RUNNING ON http://${app.get("host")}:${app.get("port")}`);
});
