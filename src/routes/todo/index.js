const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('here is list of todos');
});

module.exports = router;
