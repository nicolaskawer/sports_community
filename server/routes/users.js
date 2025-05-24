var express = require('express');
var router = express.Router();

/* GET /users/Users */
router.get('/', function(req, res, next) {
  const user = {
    name: "Nicolas"
  };

  console.log("Sending user:", user); // הדפסה לטרמינל
  res.json(user); // שולח את האובייקט לקליינט
});

module.exports = router;