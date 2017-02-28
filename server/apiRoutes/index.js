const router = require('express').Router();

// Add Routes Below
router.use('/users', require('./users'));

//Err handling - 404
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

//Err handling - 500


module.exports = router;