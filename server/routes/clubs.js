var express = require('express');
const { GetAllClubs } = require('../controllers/clubs/GetAllClubs');
var router = express.Router();

/* GET home page. */

app.get('/api/clubs/puppeteer',GetAllClubs, async (req, res,next) => {
  
});


module.exports = router;
