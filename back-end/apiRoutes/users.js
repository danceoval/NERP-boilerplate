const router = require('express').Router();

/*
	CRUD Routes
*/

router.get('/', function (req, res, next) { 
	console.log("Getting all Users");
	next();
});

router.post('/', function (req, res, next) { 
	console.log("Posting to Users")
	next();
});

router.put('/:userId', function (req, res, next) { 
	console.log("Putting a specific user")
	next();
});

router.delete('/:userId', function (req, res, next) { 
	console.log("Deleting a specific user")
	next():
});

module.exports = router;