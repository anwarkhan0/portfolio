const express = require('express');
const app = express();
const port = 80;
const path = require('path');
app.use(express.static('view/files'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/index.html'));
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})