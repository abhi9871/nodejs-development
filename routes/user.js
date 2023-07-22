const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/get-users', userController.getUsers);

router.get('/get-user/:userId', userController.getUser);

router.post('/create-user', userController.createUser);

router.put('/edit-user/:userId', userController.editUser);

router.delete('/delete-user/:userId', userController.deleteUser);

module.exports = router;
