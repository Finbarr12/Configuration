import mongoose from "mongoose";
import { environmentVariables } from "./environmentvariables";

const DbUri = environmentVariables.mongouri;

export const DbConfig = async () => {
  try {
    const connected = await mongoose.connect(DbUri);
    console.log(`Db connected to ${connected.connection.host}`);
  } catch (error) {
    console.log("An error occured", error);
  }
};
