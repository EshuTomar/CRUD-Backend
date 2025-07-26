
const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById } = require('../controllers/user.controller');

const router = express.Router();

router.post('/',createUser );
router.get('/',getAllUsers );
router.get('/:id',getUserById);
router.put('/:id', updateUserById);





module.exports = router;
    
