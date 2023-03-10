import dotenv from "dotenv";

dotenv.config();

const environmentvariables = {
  Port: process.env.Port!,
  MongoDb_String_Local: process.env.MongoDb_String_Local!,
};

export default environmentvariables;
