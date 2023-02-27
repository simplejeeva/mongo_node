import express from "express";
import {
  getmovie,
  getmoviebyid,
  postmovie,
  Deletemovie,
  Updatemoviebyid,
} from "./service/movie.service.js";
const router = express.Router();
router.get("/", async function (request, response) {
  const movie = await getmovie();
  response.send(movie);
});

router.get("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // const movie = movies.find((mv) => mv.id === id);
  const movie = await getmoviebyid(id);

  movie
    ? response.send(movie)
    : response.status(404).send({ message: "The movie not found" });
});

// express json-middleware
router.post("/", async function (request, response) {
  const data = request.body;

  // db.movies.insertmany(data)
  const result = await postmovie(data);
  response.send(result);
});

router.delete("/:id", async function (request, response) {
  const { id } = request.params;
  console.log(id);
  // const movie = movies.find((mv) => mv.id === id);
  const result = await Deletemovie(id);
  console.log(result);
  result.deletedCount >= 1
    ? response.send({ message: "The movie succesfully Delete" })
    : response.status(404).send({ message: "The movie not found" });
});

//update
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  const data = request.body;
  console.log(data);
  console.log(id);

  //db.movies.updateOne({id:id},{$set:data})
  // const movie = movies.find((mv) => mv.id === id);
  const result = await Updatemoviebyid(id, data);

  response.send(result);
  // : response.status(404).send({ message: "The movie not found" });
});

export default router;
