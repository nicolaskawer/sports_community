var express = require('express');
const { GetAllClubs } = require('../controllers/clubs/GetAllClubs');
var router = express.Router();

/* GET home page. */

router.get('/api/clubs/puppeteer',GetAllClubs, async (req, res,next) => {
  
});


module.exports = router;
