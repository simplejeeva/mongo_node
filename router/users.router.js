import express from "express";
import { postusers, getusersbyname } from "./service/users.service.js";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

async function generatehashedpassword(password) {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedpassword = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hashedpassword);
  return hashedpassword;
}

// express json-middleware
router.post("/signup", async function (request, response) {
  const { username, password } = request.body;
  const userfromdb = await getusersbyname(username);
  console.log(userfromdb);
  if (userfromdb) {
    response.status(400).send({ message: "username already exits" });
  } else if (password.length < 8) {
    response
      .status(400)
      .send({ message: "password must be at least 8 characters" });
  } else {
    const hashedpassword = await generatehashedpassword(password);

    const result = await postusers({
      username: username,
      password: hashedpassword,
    });
    response.send(result);
  }
});

//login-messsage-login in sucesssfull|Invaild credentials
router.post("/login", async function (request, response) {
  const { username, password } = request.body;
  const userfromdb = await getusersbyname(username);
  console.log(userfromdb);
  if (!userfromdb) {
    response.status(401).send({ message: "Invalid crendential" });
  } else {
    const storeddbpassword = userfromdb.password;
    const ispasswordcheck = await bcrypt.compare(password, storeddbpassword);
    console.log(ispasswordcheck);
    if (ispasswordcheck) {
      const token = jwt.sign({ id: userfromdb._id }, process.env.SECRET_KEY);
      response.send({ message: "successfull login", token: token });
    } else {
      response.status(401).send({ message: "Invalid crendential" });
    }
  }
});

export default router;
