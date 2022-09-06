const router = require('express').Router();
const controller = require('../controllers');

router.get('/users', controller.getAll);
router.get('/users/:id', controller.getId);
router.post('/users', controller.addData);

module.exports = router;