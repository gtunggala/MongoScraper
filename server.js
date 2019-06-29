const express = require('express')
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3030;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI)

app.listen(PORT, function() {
    console.log('started on ' + PORT)
});