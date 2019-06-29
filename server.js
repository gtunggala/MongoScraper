const express = require('express')

const app = express();

const PORT = 3030 || process.env.PORT

app.listen(PORT, function() {
    console.log('started on ' + PORT)
});