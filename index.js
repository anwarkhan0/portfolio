const express = require('express');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 3000;
const path = require('path');
app.use(express.static('view/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/index.html'));
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})