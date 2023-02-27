import { client } from "../../index.js";

export async function Updatemoviebyid(id, data) {
  return await client
    .db("B42Mongo")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function Deletemovie(id) {
  return await client.db("B42Mongo").collection("movies").deleteOne({ id: id });
}
export async function postmovie(data) {
  return await client.db("B42Mongo").collection("movies").insertMany(data);
}
export async function getmoviebyid(id) {
  return await client.db("B42Mongo").collection("movies").findOne({ id: id });
}
export async function getmovie() {
  return await client.db("B42Mongo").collection("movies").find({}).toArray();
}
