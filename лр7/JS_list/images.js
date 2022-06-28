const express = require('express');
const router = express.Router();
const app = express();

router.all('/', (request, response) =>{
  response.send('<h1>Picture list</h1>')
});

router.route('/')
  .post((request, response) => {
    response.send('<h1>Pictures post ID</h1>')
  });


router.route('/:id')
  .get((request, response) => {
    response.send('<h1>Pictures get ID</h1>' + request.params["id"])
  })
  .put((request, response) => {
    response.send('<h1>Pictures put get ID</h1>' + request.params["id"])
  })
  .delete((request, response) => {
    response.send('<h1>Pictures delete get ID</h1>' + request.params["id"])
  });

module.exports = router;  