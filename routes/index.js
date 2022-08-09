const router = require('express').Router();
const  = require('./api');
const  = require('./');

router.use('/',);
router.use('/',);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
