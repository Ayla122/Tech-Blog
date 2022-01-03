const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./api/home-routes.js');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;