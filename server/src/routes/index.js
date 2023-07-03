const { Router } = require("express");
const router = Router();
const countriesRoute = require ('./countriesRoute');
const activitiesRoute = require ('./activitiesRoute');

router.use('/countries', countriesRoute);
router.use('/activities', activitiesRoute);

module.exports = router;
