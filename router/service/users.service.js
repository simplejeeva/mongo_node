import { client } from "../../index.js";

export async function postusers(data) {
  // db.users.insertOne(data)
  return await client.db("B42Mongo").collection("users").insertOne(data);
}

export async function getusersbyname(username) {
  return await client
    .db("B42Mongo")
    .collection("users")
    .findOne({ username: username });
}
