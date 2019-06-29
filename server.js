const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3030;

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(
  MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  function(err) {
    if (err) {
      console.log(err);
    }
  }
);

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "public/index.html"));
});

app.listen(PORT, function() {
  console.log("started on " + PORT);
});
