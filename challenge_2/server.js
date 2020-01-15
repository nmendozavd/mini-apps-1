const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const morgan = require('morgan');
const port = 3000


app.get('/', (req, res) => {
  // res.render('form');
  res.sendFile(path.join(__dirname, './client/index.html'))
})


app.post('/', (req, res) => {
  console.log('Logging this on Server?');
  console.log(req.body);
  res.send('Got a Post Request')

})

// app.use(morgan('dev')); // research this?
// for parsing application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))