const router = require('express').Router();
const controller = require('../controllers');

router.get('/users', controller.getAll);
router.get('/users/:id', controller.getId);
router.post('/users', controller.addData);
router.put('/users/:id', controller.editData);
router.delete('/users/:id', controller.destroy);

module.exports = router;