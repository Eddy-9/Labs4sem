const port = process.env.PORT || 5500
const express = require('express');
const app = express();

app.use(express.static('public'));


const objects = require('./JS_list/objects')
app.use('/objects', objects);

const images = require('./JS_list/images')
app.use('/images', images);

const tags = require('./JS_list/tags')
app.use('/tags', tags);

app.get('/', function (request, response) {
  response.send('<h2>Hello Express!</h2>');
  console.log('tag 1');
});

app.listen(port, () => {
  console.log(`Server running at port ` + port);
  console.log(`localhost:5500`);
});