import express, { Application } from "express";
import { AppConfig } from "./app";
import { DbConfig } from "./config/db";
import { environmentVariables } from "./config/environmentvariables";

const app = express();

AppConfig(app);
DbConfig();

app.listen(environmentVariables.Port, () => {
  console.log(`Listening on Port`);
});
