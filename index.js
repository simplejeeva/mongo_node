import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express"; // "type": "module"
const app = express();
import { MongoClient } from "mongodb";

console.log(process.env.MONGO_URL);
const PORT = 4000;

console.log(process.env.MONGO_URL);
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");
//cover body to json
app.use(express.json());
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 ,jeeva");
});

app.get("/movies", async function (request, response) {
  const movie = await client
    .db("B42Mongo")
    .collection("movies")
    .find({})
    .toArray();
  response.send(movie);
});

app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // const movie = movies.find((mv) => mv.id === id);
  const movie = await client
    .db("B42Mongo")
    .collection("movies")
    .findOne({ id: id });

  movie
    ? response.send(movie)
    : response.status(404).send({ message: "The movie not found" });
});

// express json-middleware
app.post("/movies", async function (request, response) {
  const data = request.body;

  // db.movies.insertmany(data)
  const result = await client
    .db("B42Mongo")
    .collection("movies")
    .insertMany(data);
  response.send(result);
});

app.delete("/movies/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // const movie = movies.find((mv) => mv.id === id);
  const result = await client
    .db("B42Mongo")
    .collection("movies")
    .deleteOne({ id: id });
  console.log(result);
  result.deletedCount >= 1
    ? response.send({ message: "The movie succesfully Delete" })
    : response.status(404).send({ message: "The movie not found" });
});

//update
app.put("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);

  //db.movies.updateOne({id:id},{$set:data})
  // const movie = movies.find((mv) => mv.id === id);
  const result = await client
    .db("B42Mongo")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });

  response.send(result);
  // : response.status(404).send({ message: "The movie not found" });
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
