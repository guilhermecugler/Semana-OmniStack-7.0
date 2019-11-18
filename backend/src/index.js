const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb://insta:insta@insta-shard-00-00-3lkrb.mongodb.net:27017,insta-shard-00-01-3lkrb.mongodb.net:27017,insta-shard-00-02-3lkrb.mongodb.net:27017/test?ssl=true&replicaSet=insta-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(3333);
