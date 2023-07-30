const express = require("express");
require("./DB/config");
const User = require("./DB/user");
const cors = require('cors')
const app = express();

app.use(express.json()); //middleware
app.use(cors());
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(5000, () => {
  console.log("Server listening on port:5000");
});
