import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express"; // "type": "module"
const app = express();
import { MongoClient } from "mongodb";
import moviesRouter from "./router/movies.router.js";
import cors from "cors";
import usersRouter from "./router/users.router.js";

console.log(process.env.MONGO_URL);
const PORT = process.env.PORT;

console.log(process.env.MONGO_URL);
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");
//cover body to json

app.use(cors()); //3re part middle ware

app.use(express.json());
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 ,jeeva");
});

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
