
const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user.controller');

const router = express.Router();

router.post('/',createUser );
router.get('/',getAllUsers );
router.get('/:id',getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);




module.exports = router;
    
