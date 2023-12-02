const express = require('express');
const adminControllers = require('../controllers/adminController');

const router = express.Router();

router.get('/', adminControllers.admin_get);
router.get('/create', adminControllers.admin_create_get);
router.post('/create', adminControllers.admin_create_post);
router.get('/edit/:id', adminControllers.admin_edit_get);
router.put('/edit/:id', adminControllers.admin_edit_put);
router.delete('/delete/:id', adminControllers.admin_delete);

module.exports = router;