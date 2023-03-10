import dotenv from "dotenv";
dotenv.config();

export const environmentVariables = {
  Port: process.env.Port!,
  mongouri: process.env.MongoDb_String_Local!,
};
