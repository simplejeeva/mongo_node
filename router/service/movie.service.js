import { ObjectId } from "mongodb";
import { client } from "../../index.js";

export async function Updatemoviebyid(id, data) {
  return await client
    .db("B42Mongo")
    .collection("movies")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });
}
export async function Deletemovie(id) {
  return await client
    .db("B42Mongo")
    .collection("movies")
    .deleteOne({ _id: new ObjectId(id) });
}
export async function postmovie(data) {
  return await client.db("B42Mongo").collection("movies").insertMany(data);
}
export async function getmoviebyid(id) {
  return await client
    .db("B42Mongo")
    .collection("movies")
    .findOne({ _id: new ObjectId(id) });
}
export async function getmovie(query) {
  return await client.db("B42Mongo").collection("movies").find(query).toArray();
}
