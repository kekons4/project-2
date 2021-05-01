const router = require('express').Router();
const apiRoutes = require('./api');
// const categoryRoutes = require('./category');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./login');
const signupRoutes = require('./signup');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/categories', categoryRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

module.exports = router;