const router = require('express').Router();

const {
    getData,
} = require('../../controllers/data/dataVisualise.js');



router.route("/").get(getData);


module.exports = router;