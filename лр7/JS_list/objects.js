const express = require('express');
const router = express.Router();
const app = express();

router.all('/', (request, response) =>{
  response.send('<h1>Model list</h1>')
});

router.route('/')
  .post((request, response) => {
    response.send('<h1>Models post ID</h1>' + request.params["id"])
  });


router.route('/:id')
  .get((request, response) => {
    response.send('<h1>Models get ID</h1>' + request.params["id"])
  })
  .put((request, response) => {
    response.send('<h1>Models put get ID</h1>' + request.params["id"])
  })
  .delete((request, response) => {
    response.send('<h1>Models delete get ID</h1>' + request.params["id"])
  });

module.exports = router;  