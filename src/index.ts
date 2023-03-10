import express from "express";
import { dbConfig } from "./config";
import { appConfig } from "./app";
import environmentvariables from "./config/environmentvariables";

const app = express();

dbConfig();
appConfig(app);

app.listen(environmentvariables.Port, () => {
  console.log("server is running");
});
