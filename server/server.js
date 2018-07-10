const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine');
app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.sendfile(publicPath + '/index.html')
// });


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });