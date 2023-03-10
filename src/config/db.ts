import mongoose from "mongoose";
import environmentvariables from "./environmentvariables";

const Db = environmentvariables.MongoDb_String_Local;

export const dbConfig = async () => {
  try {
    const con = await mongoose.connect(Db);
    console.log(`server is connected to ${con.connection.host}`);
  } catch (error) {
    console.log("Error", error);
  }
};
