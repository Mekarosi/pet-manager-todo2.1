const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

//@route  GET api/todos
//@desc   List all todos

router.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});
module.exports = router;
