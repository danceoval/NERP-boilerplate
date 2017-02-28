const router = require('express').Router();

/*
	CRUD Routes
*/

router.get('/', function (req, res, next) { 
	console.log("Getting all Users");
});

router.post('/', function (req, res, next) { 
	console.log("Posting to Users")
});

router.put('/:userId', function (req, res, next) { 
	console.log("Putting a specific user")
});

router.delete('/:userId', function (req, res, next) { 
	console.log("Deleting a specific user")
});

module.exports = router;